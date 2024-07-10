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

export const fetchNews = async (pageNumber = 1, sortBy = 'recentNews' ) => {
  try {
    const response = await axios.get(`${BASE_URL}/news?sortBy=${sortBy=='topNews' ? 'numberOfReads' : 'PostDate'}&pageNumber=${pageNumber}`);
    return response.data;

  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

