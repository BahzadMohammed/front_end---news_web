// import React from 'react';

// const NewsCard = ({title, shortDescription, image }) => {
//   return (
//     <div className="w-full rounded-xl overflow-hidden shadow-lg">
//       <img className="w-full h-48 object-cover" src={image} alt="Sunset in the mountains" />
//       <div className="px-6 py-4">
//       <div className="p-4">
//         <h3 className="font-bold text-xl mb-2">{title}</h3>
//         <p className="text-gray-700">{shortDescription}</p>
//       </div>
//       </div>
//       <div className="px-6 pt-4 pb-2">
//         {/* <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a> */}
//       </div>
//     </div>
//   );
// };

// export default NewsCard;


// src/components/NewsCard.js
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewsCard = ({ title, image, genre, shortDescription , numberOdReads}) => {
  return (
    <div className="bg-white min-w-fit h-full shadow-lg hover:scale-95 hover:shadow-sm transition rounded-xl overflow-hidden cursor-pointer">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between">

        {/* the title and short description */}
        <div>
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-700">{shortDescription}</p>
        </div>

        {/* the number of reads and genre */}
        <div className='mt-8 flex justify-between items-end'>
          <div>
            <i className="fa-solid fa-eye"></i>
            <span className="ml-2">{numberOdReads}</span>
          </div>
          <p className="text-gray-300 bg-slate-800 text-xs rounded-full p-2">{genre}</p>
        </div>

      </div>
    </div>
  );
};

export default NewsCard;
