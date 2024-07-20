import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchNewsByGenre } from '../Services/NewsServices';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import NewsList from '../Components/NewsList';
import NewsCard from '../Components/NewsCard';
import ScaleLoader from 'react-spinners/ScaleLoader';

const GenrePage = () =>
{
  
  const { genre } = useParams();
  console.log('>>genre from url: ', genre);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [newsType, setNewsType] = useState('recentNews');
  const navigate = useNavigate();
  const location = useLocation();
  const genres = [ 'technology', 'health', 'sports',  'politics', 'business', 'science', 'entertainment'];

  useEffect(() =>
  {
    const params = new URLSearchParams(location.search);
    
    // const genre = params.get('genre');
    const pageNumber = parseInt(params.get('page'), 10) || 1;
    setCurrentPage(pageNumber);

    const sortBy = params.get('sortBy');
    setNewsType(sortBy);

    const getNews = async () =>
    {
      try
      {
        const newsData = await fetchNewsByGenre(genres.indexOf(genre) + 1 || 1, pageNumber, sortBy);
        setNews(newsData);
        setTotalPages(newsData.TotalPages);
        console.log(newsData);
      } catch (error)
      {
        console.error("Error fetching news:", error);
      }
    };

    getNews();
  }, [location.search, genre]);

  const handlePreviousPage = () =>
  {
    if (currentPage > 1)
    {
      navigate(`/genre/${genre}?page=${currentPage - 1}&sortBy=${newsType}`);
    }
  };

  const handleNextPage = () =>
  {
    navigate(`/genre/${genre}?page=${currentPage + 1}&sortBy=${newsType}`);
  };

  const handleChangeNewsType = (event) =>
  {
    navigate(`/genre/${genre}?page=${currentPage}&sortBy=${event.target.value}`);
    setNewsType(event.target.value);
  };

  // set delay for loading
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (!news || loading) {
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
        <h2 className="text-3xl font-bold mb-6 text-center capitalize">{genre} News</h2>
        <div className="flex justify-end mb-4">
          <select
            value={newsType?.newsType}
            onChange={handleChangeNewsType}
            className="p-2 border rounded cursor-pointer hover:bg-gray-200"
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
                id={item.NewsId}
                title={item.Title}
                image={item.ImageUrl}
                genre={item.GenreName}
                shortDescription={item.ShortDescription}
                numberOfReads={item.NumberOfReads}
                date={item.PostDate}
              />
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-10 mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`p-2 border rounded ${currentPage === 1 ? 'opacity-0' : 'bg-gray-600 text-white hover:bg-gray-800'} `}
          >
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 border rounded ${currentPage === totalPages ? 'opacity-0' : 'bg-gray-600 text-white hover:bg-gray-800'} `}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GenrePage;
