// import React, { useEffect, useState } from 'react';
// import { fetchTopHeadlines, fetchRecentNews } from '../Services/NewsServices';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
// import NewsList from '../Components/NewsList';
// import GenreCard from '../Components/GenreCard';

// const HomePage = () => {
//   const [topArticles, setTopArticles] = useState([]);
//   const [recentArticles, setRecentArticles] = useState([]);
//   const [lastNewsImageUrl, setLastNewsImageUrl] = useState([]);

//   useEffect(() => {
//     const getNews = async () => {
//       const topNews = await fetchTopHeadlines();
//       const recentNews = await fetchRecentNews();
//       setTopArticles(topNews.slice(0, 5));
//       setRecentArticles(recentNews.slice(0, 20));
//       setLastNewsImageUrl(recentNews[0].ImageUrl);
//     };

//     getNews();
//   }, []);

//   const genres = [ 'Technology','Sports', 'Health', 'Politics', 'Business', 'Science', 'Entertainment'];

//   return (
//     <>
//       <Header />
//       <div className="container mx-auto p-4">
//         <section className="mb-8">
//           <div className="flex justify-stretch items-start gap-5">
//             <div className="bg-blue-500 p-1 h-11 rounded-2xl"></div>
//             <h2 className="text-3xl font-bold mb-4">Top Viewing News</h2>
//           </div>
//           <NewsList articles={topArticles} />
//         </section>
//         <section className="mb-8">
//           <h2 className="text-3xl font-bold mb-4">Most Recent News</h2>
//           <div className="h-96 overflow-y-scroll">
//             <NewsList articles={recentArticles} />
//           </div>
//         </section>
//         <section className="mb-8">
//           <h2 className="text-3xl font-bold mb-4">Genres</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {genres.map((genre, index) => (
//               <GenreCard key={index} genre={genre} />
//             ))}
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default HomePage;


// -------------------------------------------
// src/pages/HomePage.js
// import React, { useEffect, useState } from 'react';
// import Header from '../Components/Header';
// import HeroSection from '../Components/HeroSection';
// import PopularNewsSection from '../Components/PopularNewsSection';
// import Footer from '../Components/Footer';
// import { fetchTopHeadlines } from '../Services/NewsServices';

// const HomePage = () => {
//   const [popularNews, setPopularNews] = useState([]);

//   useEffect(() => {
//     const getNews = async () => {
//       const news = await fetchTopHeadlines();
//       setPopularNews(news);
//     };

//     getNews();
//   }, []);

//   return (
//     <>
//       <Header />
//       <HeroSection />
//       <PopularNewsSection news={popularNews} />
//       <Footer />
//     </>
//   );
// };

// export default HomePage;


// -------------------------------------------
// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import TopNewsSection from '../Components/TopNewsSection';
import RecentNewsSection from '../Components/RecentNewsSection';
import Footer from '../Components/Footer';
import { fetchRecentNews, fetchTopHeadlines } from '../Services/NewsServices';

const HomePage = () => {
  const [topNews, setTopNews] = useState([]);
  const [recentNews, setRecentNews] = useState([]);
  // const [lastNewsImageUrl, setLastNewsImageUrl] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const topNews = await fetchTopHeadlines();
      const recentNews = await fetchRecentNews();
      setTopNews(topNews?.slice(0, 5));
      setRecentNews(recentNews.slice(0, 20));
      // setLastNewsImageUrl(recentNews[0].ImageUrl);
    };

    getNews();
  }, []);


  return (
    <>
      <Header />
      <TopNewsSection news={topNews} />
      <RecentNewsSection news={recentNews} />
      <Footer />
    </>
  );
};

export default HomePage;

