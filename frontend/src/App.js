

import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PropertyList from './components/PropertyList';
import PropertyCard from './components/PropertyCard';
import LoginForm from './components/LoginForm';
import Chatbot from './components/Chatbot';
import { AuthContext } from './contexts/AuthContext';
import './styles/App.css';

function App() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<PropertyList />} />
          <Route path="/property/:id" element={<PropertyCard />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
      {user && <Chatbot />}
    </Router>
  );
}

export default App;

