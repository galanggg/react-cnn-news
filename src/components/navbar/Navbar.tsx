import React from 'react';
import { NEWS_CATEGORY } from '../../constant/constant';

export const Navbar = ({ selectedNews, onSelect }) => {
  let categories = NEWS_CATEGORY;
  return (
    <>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {categories.map((category) => {
              return (
                <button
                  key={category}
                  onClick={() => onSelect(category)}
                  className={
                    category === selectedNews
                      ? 'border-indigo-500 text-indigo-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm'
                  }
                >
                  {category}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};
