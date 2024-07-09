// src/pages/NewsPage.js
import React, { useEffect, useState } from "react";
import { fetchNews } from "../Services/NewsServices";
import NewsCard from "../Components/NewsCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsType, setNewsType] = useState("recent");
    const newsPerPage = 10;

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await fetchNews();
                setNews(newsData);
                console.log(newsData);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        getNews();
    }, []);

    // console.log(news);

    useEffect(() => {
        // filterNews();
    }, [news, newsType]);

    // const filterNews = () => {
    //   let filtered = news;
    //   if (newsType === 'top') {
    //     filtered = [...news].sort((a, b) => b.NumberOfReads - a.NumberOfReads);
    //   } else {
    //     filtered = [...news].sort((a, b) => new Date(b.DatePublished) - new Date(a.DatePublished));
    //   }
    //   setFilteredNews(filtered);
    // };

    const handleChangeNewsType = (e) => {
        setNewsType(e.target.value);
    };

    // const indexOfLastNews = currentPage * newsPerPage;
    // const indexOfFirstNews = indexOfLastNews - newsPerPage;
    // const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                        <option value="recent">Recent News</option>
                        <option value="top">Top News</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.length != 0 &&
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
                <div className="flex justify-center mt-8">
                    {Array.from(
                        {
                            length: Math.ceil(
                                filteredNews.length / newsPerPage
                            ),
                        },
                        (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => paginate(i + 1)}
                                className={`px-4 py-2 border rounded ${
                                    currentPage === i + 1
                                        ? "bg-blue-500 text-white"
                                        : "bg-white text-black"
                                }`}
                            >
                                {i + 1} qq
                            </button>
                        )
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewsPage;
