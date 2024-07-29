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

export const fetchNewsByGenre = async (genre, pageNumber = 1, sortBy = 'recentNews') => {
  try {
    const response = await fetch(`${BASE_URL}/news/genre/${genre}?pageNumber=${pageNumber}&sortBy=${sortBy=='topNews' ? 'numberOfReads' : 'PostDate'}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
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

// Services/NewsServices.js
export const fetchNewsById = async (id) => {
  const response = await axios.get(`${BASE_URL}/news/${id}`);
  return response.data;
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

export const logout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/logout`);
    return response.data;
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

// create news
export const createNews = async (formData) => {
  try {
    console.log('>> formData-in createNews: ', formData);
    const response = await axios.post(`${BASE_URL}/news`, formData, {
      headers: {
          'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'application/json',
          // 'Authorization': 'JWT fefege...'
      },
      withCredentials: true
    });
    console.log('>> response.data-in createNews: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating news:', error);
    throw error;
  }
};

// update news
export const updateNews = async (id, formData) => {
  try {
    // const response = await axios.put(`${BASE_URL}/news/${id}`, newsData);
    const response = await axios.put(`http://localhost:5094/api/news/${id}`, formData, {
      headers: {
          'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'application/json',
          // 'Authorization': 'JWT fefege...'
      },
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error updating news:', error.response.data);
    throw error;
  }
};



// delete news
export const deleteNews = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/news/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting news:', error);
    throw error;
  }
};


export const fetchCommentsByNewsId = async (newsId) => {
  try {
    const response = await axios.get(`${BASE_URL}/Comments/${newsId}/comments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export const postComment = async (newsId, commentText, anonymousUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/comments`, {
      newsId,
      commentText,
      anonymousUser
    });
    return response.data;
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error;
  }
};


