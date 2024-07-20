import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createNews } from '../../Services/NewsServices';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Define the validation schema using Yup
const schema = yup.object().shape({
    Title: yup.string().required('Title is required').min(5, 'Title must be at least 5 characters long'),
    ShortDescription: yup.string().required('Short Description is required').max(100, 'Short Description must be less than 100 characters'),
    Content: yup.string().required('Content is required').min(20, 'Content must be at least 20 characters long'),
    GenreId: yup.string().required('Genre is required'),
    Image: yup.mixed()
        .required('Image is required')
        .test('fileSize', 'Image is too large', value => value && value[0] && value[0].size <= 5000000) // Max size 5MB
        .test('fileType', 'Unsupported File Format', value => value && value[0] && ['image/jpeg', 'image/png'].includes(value[0].type)) // JPEG or PNG
});

function CreateNewsPage()
{
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) =>
    {
        const formData = new FormData();
        formData.append('Title', data.Title);
        formData.append('ShortDescription', data.ShortDescription);
        formData.append('Content', data.Content);
        // i want to set the index of the genre to the formData
        formData.append('GenreId', genres.indexOf(data.GenreId) + 1 || 1);
        formData.append('Image', data.Image[0]);

        console.log("1.formData: ", formData);
        try
        {
            const dataOfForm = Object.fromEntries(formData)
            console.log("2.dataOfForm: ", dataOfForm);
            await createNews(dataOfForm);
            console.log("2.dataOfForm.length: ", dataOfForm.length);
            notifySuccess();
        } catch (error)
        {
            console.error('Error creating news:', error);
            notifyError();
        }
    };

    const notifySuccess = () => {
        toast.success("The news has been created!");
        // make delay for toast
        setTimeout(() => {
            navigate('/admin/news');
        }, 3500);
    };

    const notifyError = () => {
        toast.error("The news has not been created!");
    };

    const genres = [ 'Technology', 'Health', 'Sports',  'Politics', 'Business', 'Science', 'Entertainment'];

    return (
        <div className="min-h-screen bg-gray-100 flex p-8 items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Create News</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            {...register('Title')}
                            className={`w-full px-3 py-2 border rounded ${errors.Title ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.Title && <p className="text-red-500 text-sm mt-1">{errors.Title.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Short Description</label>
                        <textarea
                            {...register('ShortDescription')}
                            className={`w-full px-3 py-2 border rounded ${errors.ShortDescription ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.ShortDescription && <p className="text-red-500 text-sm mt-1">{errors.ShortDescription.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Content</label>
                        <textarea
                            {...register('Content')}
                            className={`w-full px-3 py-2 border rounded ${errors.Content ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.Content && <p className="text-red-500 text-sm mt-1">{errors.Content.message}</p>}
                    </div>

                    {/* add selection box for choosing genre */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Genre</label>
                        <select
                            {...register('GenreId')}
                            className={`w-full px-3 py-2 border rounded ${errors.GenreId ? 'border-red-500' : 'border-gray-300'}`}
                        >
                            {genres.map((genre, index) => <option key={index} value={genre}>{genre}</option>)}
                        </select>
                        {errors.GenreId && <p className="text-red-500 text-sm mt-1">{errors.GenreId.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Image</label>
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
                        Create News
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

export default CreateNewsPage;
