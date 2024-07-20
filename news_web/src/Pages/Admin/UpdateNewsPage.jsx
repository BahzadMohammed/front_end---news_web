import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchNewsById, updateNews } from '../../Services/NewsServices';
import { toast, ToastContainer } from 'react-toastify';
import ScaleLoader from 'react-spinners/ScaleLoader';
 

// Define the validation schema using Yup
const schema = yup.object().shape({
    Title: yup.string().required('Title is required').min(5, 'Title must be at least 5 characters long'),
    ShortDescription: yup.string().required('Short Description is required').max(100, 'Short Description must be less than 100 characters'),
    Content: yup.string().required('Content is required').min(20, 'Content must be at least 20 characters long'),
    Image: yup.mixed()
        .required('Image is required')
        .test('fileSize', 'Image is too large', value => !value[0] || (value[0] && value[0].size <= 5000000)) // Max size 5MB
        .test('fileType', 'Unsupported File Format', value => !value[0] || (value[0] && ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0].type))), // JPEG or PNG
    GenreId: yup.string().required('Genre is required')
});

function UpdateNewsPage() {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState({});
    const genres = [ 'Technology', 'Health', 'Sports',  'Politics', 'Business', 'Science', 'Entertainment'];
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema)
    });

    

    useEffect(() => {
        // Fetch the news data by ID
        const fetchNews = async () => {
            try {
                const response = await fetchNewsById(id);
                console.log('>>response.data: ', response);
                setNews(response);
                const { Title, ShortDescription, Content, GenreName } = response;
                console.log('title: ', Title);
                setValue('Title', Title);
                setValue('ShortDescription', ShortDescription);
                setValue('Content', Content);
                setValue('GenreId', GenreName);

                // defaultValue(
                //     {
                //         title: Title,
                //         shortDescription: ShortDescription,
                //         content: Content,
                //         genre: GenreName,
                //     }
                // )

            } catch (error) {
                console.error('Error fetching news:', error);
            }

            setLoading(false);
        };

        fetchNews();
    }, [id, setValue]);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('Title', data.Title);
        formData.append('ShortDescription', data.ShortDescription);
        formData.append('Content', data.Content);
        formData.append('GenreId', genres.indexOf(data.GenreId) + 1 || 1);
        formData.append('Image', data.Image[0]);
        // if (data.Image[0]) {
        //     formData.append('Image', data.Image[0]);
        // }

        try {
            const dataOfForm = Object.fromEntries(formData)
            console.log(">>dataOfForm: ", dataOfForm);
            const response = await updateNews(id, dataOfForm);
            console.log(">>response: ", response);
            notifySuccess();
            // navigate('/news');
        } catch (error) {
            console.error('Error updating news:', error);
            alert('Error updating news');
            notifyError();
        }
    };

    const notifySuccess = () => {
        toast.success("The news has been updated!");
        // make delay for toast
        setTimeout(() =>{
            navigate('/admin/news');
        }, 3500);
    };

    const notifyError = () => {
        toast.error("The news has not been updated!");
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
        <div className="min-h-screen bg-gray-100 flex p-8 items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Update News</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            {...register('Title')}
                            // defaultValue={news.Title}
                            className={`w-full px-3 py-2 border rounded ${errors.Title ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.Title && <p className="text-red-500 text-sm mt-1">{errors.Title.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Short Description</label>
                        <textarea
                            {...register('ShortDescription')}
                            // defaultValue={news.ShortDescription}
                            className={`w-full px-3 py-2 border rounded ${errors.ShortDescription ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.ShortDescription && <p className="text-red-500 text-sm mt-1">{errors.ShortDescription.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Content</label>
                        <textarea
                            {...register('Content')}
                            // defaultValue={news.Content}
                            className={`w-full px-3 py-2 border rounded ${errors.Content ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.Content && <p className="text-red-500 text-sm mt-1">{errors.Content.message}</p>}
                    </div>

                    {/* add selection box for choosing genre */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Genre</label>
                        <select
                            {...register('GenreId')}
                            // defaultValue={news.GenreName}
                            className={`w-full px-3 py-2 border rounded ${errors.GenreId ? 'border-red-500' : 'border-gray-300'}`}
                        >
                            {genres.map((genre, index) => <option key={index} value={genre}>{genre}</option>)}
                        </select>
                        {errors.GenreId && <p className="text-red-500 text-sm mt-1">{errors.GenreId.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Image (optional)</label>
                        <input
                            type="file"
                            {...register('Image')}
                            className={`w-full px-3 py-2 border rounded ${errors.Image ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.Image && <p className="text-red-500 text-sm mt-1">{errors.Image.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white rounded-md hover:bg-black transition-colors mb-4 px-4 py-2 duration-200"
                    >
                        Update News
                    </button>
                    <button
                        onClick={() => navigate('/admin/news')}
                        className="w-full bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-200"
                    >
                        Cancel
                    </button>
                    
                </form>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}

export default UpdateNewsPage;
