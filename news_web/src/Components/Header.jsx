
// // src/components/Header.js
// import React, { useState } from 'react';
// import { useAuth } from '../Auth/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   console.log(">>user header: ", user)

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const adminNav = (page) => {
//     console.log(">>page: ", page)
//     navigate(`/admin/${page === 'news' ? 'news' : `genre/${page}`}`);
//   }

//   return (
//     <header className="bg-black text-white py-4 px-8">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold">SNW</div>
//         <nav className="hidden md:flex space-x-4">
          
//             {!user ? 
//               <ul className="flex space-x-4">
//                  <li><a href="/news" className="hover:underline hover:text-blue-400 transition underline-offset-8">News</a></li>
//                 <li><a href="/genre/technology" className="hover:underline hover:text-blue-400 transition underline-offset-8">Technology</a></li>
//                 <li><a href="/genre/health" className="hover:underline hover:text-blue-400 transition underline-offset-8">Health</a></li>
//                 <li><a href="/genre/sport" className="hover:underline hover:text-blue-400 transition underline-offset-8">Sport</a></li>
//                 <li><a href="/genre/politics" className="hover:underline hover:text-blue-400 transition underline-offset-8">Politics</a></li>
//                 <li><a href="/genre/business" className="hover:underline hover:text-blue-400 transition underline-offset-8">Business</a></li>
//                 <li><a href="/genre/science" className="hover:underline hover:text-blue-400 transition underline-offset-8">Science</a></li>
//                 <li><a href="/genre/entertainment" className="hover:underline hover:text-blue-400 transition underline-offset-8">Entertainment</a></li>
//               </ul> 
//               :
//               <ul className="flex space-x-4">
//                  <li><a href="/news" onClick={() => adminNav('news')} className="hover:underline hover:text-blue-400 transition underline-offset-8">News</a></li>
//                 <li><a href="/genre/technology" onClick={() => adminNav('technology')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Technology</a></li>
//                 <li><a href="/genre/health" onClick={() => adminNav('health')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Health</a></li>
//                 <li><a href="/genre/sport" onClick={() => adminNav('sport')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Sport</a></li>
//                 <li><a href="/genre/politics" onClick={() => adminNav('politics')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Politics</a></li>
//                 <li><a href="/genre/business" onClick={() => adminNav('business')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Business</a></li>
//                 <li><a href="/genre/science" onClick={() => adminNav('science')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Science</a></li>
//                 <li><a href="/genre/entertainment" onClick={() => adminNav('entertainment')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Entertainment</a></li>
//               </ul> 
//             }

//         </nav>
//         <div className="hidden md:block">
//           {user ? <div className="text-sm font-bold border-2 border-white px-4 py-2 rounded-full">{String(user).toUpperCase()}</div> 
//             : 
//             <button className="bg-gray-700 px-4 py-2 rounded">
//               <a href="/login">Login</a>
//             </button>
//           }
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <nav className="md:hidden mt-4">
//           <ul className="space-y-4">
//             <li><a href="/news" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">News</a></li>
//             <li><a href="/genre/technology" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Technology</a></li>
//             <li><a href="/genre/health" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Health</a></li>
//             <li><a href="/genre/sport" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Sport</a></li>
//             <li><a href="/genre/politics" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Politics</a></li>
//             <li><a href="/genre/business" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Business</a></li>
//             <li><a href="/genre/science" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Science</a></li>
//             <li><a href="/genre/entertainment" className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Entertainment</a></li>
//             <li>
//               {user ? <div className="block text-center text-sm font-bold border-2 border-white px-4 py-2 rounded-full">{String(user).toUpperCase()}</div> 
//                 : 
//                 <a href="/login" className="block text-center bg-gray-700 px-4 py-2 rounded mt-4">Login</a>
//               }
//             </li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;


// src/components/Header.js
import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNav = (page) => {
    if (user) {
      navigate(`/admin/${page === 'news' ? 'news' : `genre/${page}`}`);
    } else {
      navigate(`/${page === 'news' ? 'news' : `genre/${page}`}`);
    }
  };

  return (
    <header className="bg-black text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer" onClick={() => {
            navigate('/')
            window.scrollTo(0, 0)
            window.location.reload()
          }
        }>SNW</div>
        <nav className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li><button onClick={() => handleNav('news')} className="hover:underline hover:text-blue-400 transition underline-offset-8">News</button></li>
            <li><button onClick={() => handleNav('technology')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Technology</button></li>
            <li><button onClick={() => handleNav('health')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Health</button></li>
            <li><button onClick={() => handleNav('sports')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Sports</button></li>
            <li><button onClick={() => handleNav('politics')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Politics</button></li>
            <li><button onClick={() => handleNav('business')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Business</button></li>
            <li><button onClick={() => handleNav('science')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Science</button></li>
            <li><button onClick={() => handleNav('entertainment')} className="hover:underline hover:text-blue-400 transition underline-offset-8">Entertainment</button></li>
          </ul>
        </nav>
        <div className="hidden md:block">
          {user ? (
            <div
              onClick={() => {
                navigate('/');
                window.scrollTo(0, 0);
                window.location.reload();
              }}
              className="block text-center text-sm font-bold border-2 select-none cursor-pointer hover:bg-white hover:text-black transition border-white px-4 py-2 rounded-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? 'LOGOUT' : String(user).toUpperCase()}
            </div>
          ) : (
            <a href="/login" className="text-center bg-gray-700 px-4 py-2 rounded mt-4">Login</a>
            )}
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
            <li><button onClick={() => handleNav('news')} className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">News</button></li>
            <li><button onClick={() => handleNav('technology')} className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Technology</button></li>
            <li><button onClick={() => handleNav('health')} className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Health</button></li>
            <li><button onClick={() => handleNav('sports')} className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Sports</button></li>
            <li><button onClick={() => handleNav('politics')} className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Politics</button></li>
            <li><button onClick={() => handleNav('business')} className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Business</button></li>
            <li><button onClick={() => handleNav('science')} className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Science</button></li>
            <li><button onClick={() => handleNav('entertainment')} className="block text-center hover:underline hover:text-blue-400 transition underline-offset-8">Entertainment</button></li>
            <li>
              {user ? (
                <div
                  onClick={() => {
                    navigate('/');
                    window.scrollTo(0, 0);
                    window.location.reload();
                  }}
                  className="block text-center text-sm font-bold border-2 border-white px-4 py-2 rounded-full select-none cursor-pointer hover:bg-white hover:text-black transition"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered ? 'LOGOUT' : String(user).toUpperCase()}
                </div>
              ) : (
                <a href="/login" className="block text-center bg-gray-700 px-4 py-2 rounded mt-4">Login</a>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
