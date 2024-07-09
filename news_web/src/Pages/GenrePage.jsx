import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNewsByGenre } from '../Services/NewsServices';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import NewsList from '../Components/NewsList';

const GenrePage = () => {
  const { genre } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNewsByGenre(genre);
      setArticles(news);
    };

    getNews();
  }, [genre]);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">{genre} News</h2>
        <NewsList articles={articles} />
      </div>
      <Footer />
    </>
  );
};

export default GenrePage;
