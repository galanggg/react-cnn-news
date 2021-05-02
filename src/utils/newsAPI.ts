export const fetchNews = async (type) => {
  let url = `https://berita-indo-api.vercel.app/v1/cnn-news/${type}`;
  let response = await fetch(url);
  return response.json();
};
