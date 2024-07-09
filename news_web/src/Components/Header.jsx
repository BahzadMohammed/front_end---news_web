// // src/components/Header.js
// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-black text-white py-4">
//       <div className="container mx-auto flex justify-between items-center p-3">
//         <div className="text-2xl font-bold">NEWS</div>
//         <nav>
//           <ul className="flex space-x-4">
//             <li><button className="bg-red-600 px-4 py-2 rounded">Login</button></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


// src/components/Header.js
import React from 'react';

const Header = () => {


  
  return (
    <header className="bg-black text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">SNW</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/news" className="hover:underline hover:text-blue-400 transition underline-offset-8">News</a></li>
            <li><a href="/genre/technology" className="hover:underline hover:text-blue-400 transition underline-offset-8">Technology</a></li>
            <li><a href="/genre/health" className="hover:underline hover:text-blue-400 transition underline-offset-8">Health</a></li>
            <li><a href="/genre/sport" className="hover:underline hover:text-blue-400 transition underline-offset-8">Sport</a></li>
            <li><a href="/genre/politics" className="hover:underline hover:text-blue-400 transition underline-offset-8">Politics</a></li>
            <li><a href="/genre/business" className="hover:underline hover:text-blue-400 transition underline-offset-8">Business</a></li>
            <li><a href="/genre/science" className="hover:underline hover:text-blue-400 transition underline-offset-8">Science</a></li>
            <li><a href="/genre/entertainment" className="hover:underline hover:text-blue-400 transition underline-offset-8">Entertainment</a></li>
          </ul>
        </nav>
        <div>
          <button className="bg-gray-700 px-4 py-2 rounded">
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

