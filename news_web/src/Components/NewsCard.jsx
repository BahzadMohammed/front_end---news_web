// src/components/NewsCard.js
import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewsCard = ({ id, title, image, genre, shortDescription, numberOfReads, date }) => {
    // console.log('id: ',id);
    return (
        <Link to={`/news/${id}`}>
            <div className="bg-white min-w-fit h-full shadow-lg hover:scale-95 hover:shadow-sm transition rounded-xl overflow-hidden cursor-pointer">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col justify-between">
                    {/* the title and short description */}
                    <div>
                        <h3 className="font-bold text-xl mb-2">{title}</h3>
                        <p className="text-gray-700">{shortDescription}</p>
                    </div>

                    {/* the number of reads and genre */}
                    <div className="mt-8 flex justify-between items-end">
                        <div className="flex flex-col justify-start gap-2">
                            {/* number of reads */}
                            <div className="flex flex-row justify-start">
                                <i className="fa-solid fa-eye" style={{ fontSize: "15px" }}></i>
                                <span className="ml-2 text-xs">{numberOfReads}</span>
                            </div>

                            {/* date */}
                            <div className="flex flex-row justify-start">
                                <i class="fa-regular fa-calendar-days"></i>
                                <p className="ml-2 text-xs">{date.replace(/T.*$/, "")}</p>
                            </div>
                        </div>

                        {/* genre */}
                        <p className="text-gray-300 bg-slate-800 text-xs rounded-full p-2">
                            {genre}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
