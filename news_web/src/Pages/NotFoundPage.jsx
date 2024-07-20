import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <div className="">
                <div className='flex flex-col justify-center items-center w-full h-screen'>
                    <h1>Oops!</h1>
                    <h1 className="text-9xl font-extrabold font-mono">404</h1>
                    <p className='text-3xl mb-10'>Page Not Found</p>
                    <Link to="/" className='bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Go Home</Link>
                </div>
            </div>
            <Footer />
        </> 
    );
};

export default NotFoundPage;


