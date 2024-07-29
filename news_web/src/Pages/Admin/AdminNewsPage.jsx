import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchNews } from "../../Services/NewsServices";
import NewsCard from "../../Components/NewsCard";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ScaleLoader from "react-spinners/ScaleLoader";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [newsType, setNewsType] = useState('recentNews');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search)??'';
    const pageNumber = parseInt(params.get('page'), 10) || 1;
    setCurrentPage(pageNumber);
    
    const sortBy = params.get('sortBy')??'';
    setNewsType(sortBy);
    
    const getNews = async () => {
      try {
        const newsData = await fetchNews(pageNumber, sortBy);
        setNews(newsData);
        console.log(newsData);
        setTotalPages(newsData.TotalPages);
      } catch (error) {
        console.error("Error fetching news:", error);
      }

      setLoading(false);
    };

    getNews();
  }, [location.search]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      navigate(`/admin/news?page=${currentPage - 1}&sortBy=${newsType}`);
    }
  };

  const handleNextPage = () => {
    navigate(`/admin/news?page=${currentPage + 1}&sortBy=${newsType}`);
  };

  const handleChangeNewsType = (event) => {
    navigate(`/admin/news?page=${currentPage}&sortBy=${event.target.value??''}`);
    setNewsType(event.target.value??'');
  };

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
      <div className="container mx-auto p-4">
        <div className="flex justify-between mb-8">
          <select
            value={newsType}
            onChange={handleChangeNewsType}
            className="p-2 border rounded cursor-pointer hover:bg-gray-200"
          >
            <option value="recentNews">Recent News</option>
            <option value="topNews">Top News</option>
          </select>
          <div>
            {/* create news button */}
            <button
              onClick={() => navigate('/admin/create-news')}
              className="bg-gray-700 text-white  hover:bg-gray-900 transition-colors font-bold py-2 px-4 rounded"
            >
              Create News
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.length !== 0 &&
            news.Items.map((item, index) => (
              <NewsCard
                key={index}
                id={item.NewsId}
                title={item.Title}
                image={item.ImageUrl}
                genre={item.GenreName}
                shortDescription={item.ShortDescription}
                numberOfReads={item.NumberOfReads}
                date={item.PostDate}
                url="/admin/news/"
              />
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-10 mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`p-2 border rounded ${currentPage === 1 ? 'opacity-0' : 'bg-gray-600 text-white hover:bg-gray-800' } `}
          >
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 border rounded ${currentPage === totalPages ? 'opacity-0' : 'bg-gray-600 text-white hover:bg-gray-800' } `}
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
