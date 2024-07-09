// src/components/PopularNewsSection.js
import React from 'react';
import NewsCard from './NewsCard';

const PopularNewsSection = ({ news }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              title={item.Title}
              shortDescription={item.ShortDescription}
              image={item.ImageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularNewsSection;
