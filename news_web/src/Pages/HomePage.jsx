import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import TopNewsSection from '../Components/TopNewsSection';
import RecentNewsSection from '../Components/RecentNewsSection';
import Footer from '../Components/Footer';
import { fetchRecentNews, fetchTopHeadlines } from '../Services/NewsServices';
import ScaleLoader from 'react-spinners/ScaleLoader';

const HomePage = () => {
  const [topNews, setTopNews] = useState([]);
  const [recentNews, setRecentNews] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [lastNewsImageUrl, setLastNewsImageUrl] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const topNews = await fetchTopHeadlines();
      const recentNews = await fetchRecentNews();
      setTopNews(topNews?.slice(0, 5));
      setRecentNews(recentNews.slice(0, 20));
      // setLastNewsImageUrl(recentNews[0].ImageUrl);
      setLoading(false);
    };

    getNews();
  }, []);

  if (loading) {
    console.log('loading...');
    return <div className="flex justify-center items-center w-full h-screen">
      <ScaleLoader 
        color="#1F2937"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  }

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

