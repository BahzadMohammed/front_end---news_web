import React from 'react';
import { Link } from 'react-router-dom';

const GenreCard = ({ genre }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-100 p-4">
      <Link to={`/genre/${genre}`} className="text-blue-500 text-xl">{genre}</Link>
    </div>
  );
};

export default GenreCard;
