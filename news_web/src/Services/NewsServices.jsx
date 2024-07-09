import axios from 'axios';


const BASE_URL = 'http://localhost:5094/api'; // Update with your actual API base URL


export const fetchTopHeadlines = async () => {
  const response = await fetch(`${BASE_URL}/news?sortBy=numberOfReads`);
  const data = await response.json();
  // console.log(data);
  return data.Items;
};

export const fetchRecentNews = async () => {
  const response = await fetch(`${BASE_URL}/news?sortBy=PostDate`);
  const data = await response.json();
  // console.log(data);
  return data.Items;
};

export const fetchNewsByGenre = async (genre) => {
  const response = await fetch(`${BASE_URL}/news/genre/${genre}`);
  const data = await response.json();
  // console.log(data);
  return data.Items;
};

export const fetchNews = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/news'); // Adjust the URL as needed
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', { email, password }); // Adjust the URL as needed
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

