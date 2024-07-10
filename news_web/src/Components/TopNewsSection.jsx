// src/components/TopNewsSection.js
import React from 'react';
import NewsCard from './NewsCard';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopNewsSection = ({ news }) => {
  if (!news || news.length === 0) return null;
  
  return (
    <section className="bg-gray-200 p-8">
      <div className="container mx-auto">

        {/* the title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-gray-800 text-white px-1 py-5 rounded-full shadow-lg"></div>
          <h2 className="text-3xl font-bold mb-4 hover:text-blue-500 transition cursor-pointer">
            <a href="/news">Top News</a>
          </h2>
        </div>

        {/* the news cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* the main news card */}
          <div className="col-span-1 bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 hover:shadow-sm transition">
            {/* <img src={news[0].ImageUrl} alt="Main News" className="w-full h-64 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-xl mb-2">{news[0].Title}</h2>
                <p className="text-gray-700">{news[0].ShortDescription}</p>
              </div>
              <div className='mt-8 flex justify-between items-end'>
                <div>
                  <i className="fa-solid fa-eye"></i>
                  <span className="ml-2">{news[0].NumberOfReads}</span>
                </div>
                <p className="text-gray-300 bg-slate-800 text-xs  rounded-full p-2">{news[0].GenreName}</p>
              </div>
            </div> */}

            <NewsCard
              id={news[0].NewsId}
              title={news[0].Title}
              image={news[0].ImageUrl}
              genre={news[0].GenreName}
              shortDescription={news[0].ShortDescription}
              numberOfReads={news[0].NumberOfReads}
              date={news[0].PostDate}
            />
          </div>

          {/* the secondary news cards */}
          <div className="grid grid-cols-1 col-span-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {news.slice(1, 5).map((item, index) => (
              <NewsCard
                key={index}
                id={item.Id}
                title={item.Title}
                image={item.ImageUrl}
                genre={item.GenreName}
                shortDescription={item.ShortDescription}
                numberOfReads={item.NumberOfReads}
                date={item.PostDate}
              />
              // <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 hover:shadow-sm transition">
              //   <img src={newsItem.ImageUrl} alt={`Secondary News ${index + 1}`} className="w-full h-32 object-cover" />
              //   <div className="p-4 flex flex-col justify-between">
              //     <div>
              //       <h2 className="font-bold text-xl mb-2">{news[0].Title}</h2>
              //       <p className="text-gray-700">{news[0].ShortDescription}</p>
              //     </div>
              //     <div className='mt-8 flex justify-between items-end'>
              //       <div>
              //         <i className="fa-solid fa-eye"></i>
              //         <span className="ml-2">{news[0].NumberOfReads}</span>
              //       </div>
              //       <p className="text-gray-300 bg-slate-800 text-xs  rounded-full p-2">{news[0].GenreName}</p>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default TopNewsSection;
