// Pages/NewsDetailPage.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNewsById } from "../Services/NewsServices";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsDetail, setNewsDetail] = useState('');

  useEffect(() => {
    const getNewsDetail = async () => {
      try {
        const newsData = await fetchNewsById(id);
        setNewsDetail(newsData);
      } catch (error) {
        console.error("Error fetching news detail:", error);
      }
    };

    getNewsDetail();
  }, [id]);

  if (!newsDetail) {
    return <div>Loading...</div>;
  }

  const { Title, ImageUrl, ShortDescription, Content, NumberOfReads, PostDate, LastUpdateDate, GenreName } = newsDetail;
//   const displayDate = PostDate === LastUpdateDate ? PostDate : `Created: ${PostDate}, Updated: ${LastUpdateDate}`;

//   only the date show not the time use regex

  const displayDate = PostDate.replace(/T.*$/, '');
  console.log(displayDate);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <button onClick={() => navigate(-1)} className="p-2 border rounded mb-4">Back</button>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{Title}</h1>
        <img src={ImageUrl} alt={Title} className="mb-10" />

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

        {PostDate !== LastUpdateDate && 
            <div className='flex flex-row justify-start gap-3 items-center mb-4'>
                <i className="fa-regular fa-calendar-days"></i>
                <h2 className="text-sm sm:text-base"><strong>Update Date: </strong></h2>
                <p className="">{LastUpdateDate.replace(/T.*$/, '')}</p>
            </div>
        }

        {/* <div>
            <h2 className="mb-4 text-2xl"><strong>Genre: </strong></h2>
            <p className="mb-4">{GenreName}</p>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default NewsDetailPage;
