import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import GenrePage from './Pages/GenrePage';
import LoginPage from './Pages/LoginPage';
import NewsPage from './Pages/NewsPage';
import NotFoundPage from './Pages/NotFoundPage';
import AdminNewsPage from './Pages/Admin/AdminNewsPage';
import AdminNewsDetailPage from './Pages/Admin/AdminNewsDetailPage';
import CreateNewsPage from './Pages/Admin/CreateNewsPage';
import UpdateNewsPage from './Pages/Admin/UpdateNewsPage';
import AdminGenrePage from './Pages/Admin/AdminGenrePage';
import Secret from './Pages/Secret';
import NewsDetailPage from './Pages/NewsDetailPage';
import { AuthProvider } from './Auth/AuthContext';
import ProtectedRoute from './Auth/ProtectedRoute';
// import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/genre/:genre" element={<GenrePage/>} />
          <Route path="/admin/genre/:genre" element={<AdminGenrePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <ProtectedRoute path="/auth/create-news" element={<Secret/>} role="Admin" />
          <ProtectedRoute path="/auth/update-news" element={<Secret/>} role="Admin" />
          <ProtectedRoute path="/auth/delete-news" element={<Secret/>} role="Admin" /> */}
          <Route 
            path="/admin/news" 
            element={
              <ProtectedRoute role="Admin">
                <AdminNewsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/news/:id" 
            element={
              <ProtectedRoute role="Admin">
                <AdminNewsDetailPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/create-news" 
            element={
              <ProtectedRoute role="Admin">
                <CreateNewsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/update-news/:id" 
            element={
              <ProtectedRoute role="Admin">
                <UpdateNewsPage />
              </ProtectedRoute>
            } 
          />
          {/* <Route 
            path="/admin/genre/:genre" 
            element={
              <ProtectedRoute role="Admin">
                <AdminGenrePage />
              </ProtectedRoute>
            } 
          /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
