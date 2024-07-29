// Pages/NewsDetailPage.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNewsById } from "../Services/NewsServices";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ClipLoader from "react-spinners/ClipLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import Comments from "../Components/Comments";

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsDetail, setNewsDetail] = useState('');
  const [loading, setLoading] = useState(true);
  const BASE_URL = 'http://localhost:5094/api';

  useEffect(() => {
    const getNewsDetail = async () => {
      try {
        const newsData = await fetchNewsById(id);
        setNewsDetail(newsData);
        console.log(newsData);
      } catch (error) {
        console.error("Error fetching news detail:", error);
      }

      setLoading(false);
    };

    getNewsDetail();
  }, [id]);

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

  const { Title, ImageUrl, ShortDescription, Content, NumberOfReads, PostDate, LastUpdateDate, GenreName } = newsDetail;

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <button onClick={() => navigate(-1)} className="p-2 border rounded mb-4 bg-gray-200 hover:bg-gray-600 hover:text-white transition">Back</button>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{Title}</h1>
        <img src={
          ImageUrl.includes('http') ? ImageUrl : `${BASE_URL}${ImageUrl}`
        } alt={Title} className="mb-10 w-full h-[32rem] object-cover rounded-lg" />

        <div className="mb-8">
            <h2 className="mb-4 text-xl sm:text-2xl"><strong>Short Description: </strong></h2>
            <p className="mb-4">{ShortDescription}</p>
        </div>

        <div>
            <h2 className="mb-4 text-xl sm:text-2xl"><strong>Content: </strong></h2>
            <p className="mb-4">{Content}</p>
        </div>

        <div className="mb-16"></div>

        <div className="flex mb-6">
            <p className="text-gray-300 bg-slate-800 text-xs rounded-full p-2">{GenreName}</p>
        </div>


        <div className='flex flex-row justify-start gap-3 items-center mb-4'>
            <i className="fa-solid fa-eye" style={{ fontSize: '15px'  }}></i>
            <h2 className="text-sm sm:text-base"><strong>Number of Reads: </strong>{NumberOfReads}</h2>
        </div>


        <div className='flex flex-row justify-start gap-3 items-center mb-4'>
            <i className="fa-regular fa-calendar-days"></i>
            <h2 className=" text-sm sm:text-base"><strong>Post Date: </strong></h2>
            <p className="">{PostDate.replace(/T.*$/, '')}</p>
        </div>

        {PostDate.replace(/T.*$/, '') !== LastUpdateDate.replace(/T.*$/, '') && 
            <div className='flex flex-row justify-start gap-3 items-center mb-4'>
                <i className="fa-regular fa-calendar-days"></i>
                <h2 className="text-sm sm:text-base"><strong>Update Date: </strong></h2>
                <p className="">{LastUpdateDate.replace(/T.*$/, '')}</p>
            </div>
        }

        {/* Add Comments Component */}
        <Comments newsId={id} />
      </div>
      <Footer />
    </>
  );
};

export default NewsDetailPage;





