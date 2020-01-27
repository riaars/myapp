import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Contact from './ContactUs/ContactUs';
import RestaurantList from './RestaurantList/RestaurantList';

function App() {
  return (
    <div>
      <Header />
      <Contact />
      <RestaurantList />
    </div>
  );
}

export default App;
