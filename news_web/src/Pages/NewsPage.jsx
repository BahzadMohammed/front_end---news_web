import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchNews } from "../Services/NewsServices";
import NewsCard from "../Components/NewsCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsType, setNewsType] = useState('recentNews');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageNumber = parseInt(params.get('page'), 10) || 1;
    setCurrentPage(pageNumber);
    
    const sortBy = params.get('sortBy');
    setNewsType(sortBy);
    
    const getNews = async () => {
      try {
        const newsData = await fetchNews(pageNumber, sortBy);
        setNews(newsData);
        console.log(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    getNews();
  }, [location.search]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      navigate(`/news?page=${currentPage - 1}&sortBy=${newsType}`);
    }
  };

  const handleNextPage = () => {
    navigate(`/news?page=${currentPage + 1}&sortBy=${newsType}`);
  };

  const handleChangeNewsType = (event) => {
    navigate(`/news?page=${currentPage}&sortBy=${event.target.value}`);
    setNewsType(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex justify-end mb-4">
          <select
            value={newsType}
            onChange={handleChangeNewsType}
            className="p-2 border rounded"
          >
            <option value="recentNews">Recent News</option>
            <option value="topNews">Top News</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.length !== 0 &&
            news.Items.map((item, index) => (
              <NewsCard
                key={index}
                title={item.Title}
                image={item.ImageUrl}
                genre={item.GenreName}
                shortDescription={item.ShortDescription}
                numberOfReads={item.NumberOfReads}
              />
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-10 mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="p-2 border rounded"
          >
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={handleNextPage}
            className="p-2 border rounded"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsPage;
