// // src/components/Header.js
// import React from 'react';

// const Header = () => {


  
//   return (
//     <header className="bg-black text-white py-4 px-8">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold">SNW</div>
//         <nav>
//           <ul className="flex space-x-4">
//             <li><a href="/news" className="hover:underline hover:text-blue-400 transition underline-offset-8">News</a></li>
//             <li><a href="/genre/technology" className="hover:underline hover:text-blue-400 transition underline-offset-8">Technology</a></li>
//             <li><a href="/genre/health" className="hover:underline hover:text-blue-400 transition underline-offset-8">Health</a></li>
//             <li><a href="/genre/sport" className="hover:underline hover:text-blue-400 transition underline-offset-8">Sport</a></li>
//             <li><a href="/genre/politics" className="hover:underline hover:text-blue-400 transition underline-offset-8">Politics</a></li>
//             <li><a href="/genre/business" className="hover:underline hover:text-blue-400 transition underline-offset-8">Business</a></li>
//             <li><a href="/genre/science" className="hover:underline hover:text-blue-400 transition underline-offset-8">Science</a></li>
//             <li><a href="/genre/entertainment" className="hover:underline hover:text-blue-400 transition underline-offset-8">Entertainment</a></li>
//           </ul>
//         </nav>
//         <div>
//           <button className="bg-gray-700 px-4 py-2 rounded">
//             <a href="/login">Login</a>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">SNW</div>
        <nav className="hidden md:flex space-x-4">
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
        <div className="hidden md:block">
          <button className="bg-gray-700 px-4 py-2 rounded">
            <a href="/login">Login</a>
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden mt-4">
          <ul className="space-y-4">
            <li><a href="/news" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">News</a></li>
            <li><a href="/genre/technology" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Technology</a></li>
            <li><a href="/genre/health" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Health</a></li>
            <li><a href="/genre/sport" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Sport</a></li>
            <li><a href="/genre/politics" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Politics</a></li>
            <li><a href="/genre/business" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Business</a></li>
            <li><a href="/genre/science" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Science</a></li>
            <li><a href="/genre/entertainment" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Entertainment</a></li>
            <li><a href="/login" className="block text-center bg-gray-700 px-4 py-2 rounded mt-4">Login</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
