// // src/components/RecentNewsSection.js
// import React from 'react';
// import NewsCard from './NewsCard';

// const RecentNewsSection = ({ news }) => {
//   return (
//     <section className="p-8 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold mb-4">News</h2>
//         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {news.map((item, index) => (
//             <NewsCard
//               key={index}
//               title={item.Title}
//               image={item.ImageUrl}
//               genre={item.GenreName}
//               shortDescription={item.ShortDescription}
//               numberOdReads={item.NumberOfReads}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecentNewsSection;


// src/components/RecentNewsSection.js
import React, { useRef } from 'react';
import NewsCard from './NewsCard';

const RecentNewsSection = ({ news }) =>
{
  const scrollContainerRef = useRef(null);

  const scrollLeft = () =>
  {
    scrollContainerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight = () =>
  {
    scrollContainerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
  };

  return (
    <section className="p-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-gray-800 text-white px-1 py-5 rounded-full shadow-lg"></div>
          <h2 className="text-3xl font-bold mb-4 hover:text-blue-500 transition cursor-pointer">
            <a href="/news?sortBy=recentNews">Recent News</a></h2>
        </div>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute -left-9 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
          >
            &lt;
          </button>
          {/* <div ef={scrollContainerRef} className="flex overflow-x-scroll scrollbar-hide space-x-4"> */}
          <div ref={scrollContainerRef} className="flex overflow-x-scroll scrollbar-hide space-x-4 rounded-3xl pb-5">
            {news.map((item, index) => (
              <div key={index} className="min-w-fit">
                <NewsCard
                  key={index}
                  id={item.NewsId}
                  title={item.Title}
                  image={item.ImageUrl}
                  genre={item.GenreName}
                  shortDescription={item.ShortDescription}
                  numberOfReads={item.NumberOfReads}
                  date={item.PostDate}
                />
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute -right-9 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentNewsSection;
