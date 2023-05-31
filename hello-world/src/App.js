import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Sidebar from './components/sidebar/Sidebar';

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import AppBlog from './pages/blog';


function App() {
    return (
      <div className="App">
        <Router>
          <Header />   
          <Sidebar/>
          <Routes>
            <Route path='/blog' element={<AppBlog />} />
          </Routes>
        </Router>
      </div>
    );
}
export default App;