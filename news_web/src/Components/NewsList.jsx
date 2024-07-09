import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ articles }) => {
  return (
    <div className="p-3 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center content-center justify-items-center">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
