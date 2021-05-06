import React from 'react';

export const Card = React.memo(({ news, selectedNews }) => {
  let topThreeNews = news.data?.slice(0, 3);
  return (
    <>
      <div className="relative my-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              From the CNN News
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Top three news updated for today !
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {topThreeNews &&
              topThreeNews.map((news) => {
                return (
                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src={news.image.large}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                          <a href="/" className="hover:underline">
                            {selectedNews}
                          </a>
                        </p>
                        <a href="/" className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            {news.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {news.contentSnippet}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
});
