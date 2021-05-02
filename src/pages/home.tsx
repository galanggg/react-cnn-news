import React from 'react';
import { Card } from '../components/card/Card';
import { Navbar } from '../components/navbar/Navbar';
import { fetchNews } from '../utils/newsAPI';

export const Home = () => {
  const [selectedNews, setSelectedNews] = React.useState('nasional');
  const [news, setNews] = React.useState([]);

  const changeCategory = async (type: string) => {
    const response = await fetchNews(type);
    setNews(response);
    setSelectedNews(type);
  };

  React.useEffect(() => {
    changeCategory(selectedNews);
  }, [selectedNews]);

  return (
    <div>
      <Navbar selectedNews={selectedNews} onSelect={changeCategory} />
      <Card news={news} selectedNews={selectedNews} />
    </div>
  );
};
