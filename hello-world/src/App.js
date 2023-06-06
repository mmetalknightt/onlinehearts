import './App.css';
import Header from './components/header/Header.js';
import Sidebar from './components/sidebar/Sidebar';
import React from 'react';

import {Route, Routes, BrowserRouter as Router, Navigate} from 'react-router-dom';

import AppBlueCarRev from './pages/blog/blueCarRev';
import Appasgb from './pages/sidebarItems/asgb';
import Appmt from './pages/sidebarItems/mt';
import Appmkd from './pages/sidebarItems/mkd';
import Appyemk from './pages/sidebarItems/yemk';
import Appew from './pages/sidebarItems/ew';
import Appmkep from './pages/sidebarItems/mkep';
import AppAmerikaRev from './pages/blog/amerikaRev';
import AppDiaryEntry1 from './pages/blog/diaryEntry1';


const App = () => {


    return (
      <div className="App">
        
        <Router>
        
        <Routes>
          <Route path="/" element={ <Navigate to="/asgb" />}/>
            <Route path='/blueCarRev' element={<AppBlueCarRev />} />
            <Route path='/amerikaRev' element={<AppAmerikaRev />} />
            <Route path='/diaryEntry1' element={<AppDiaryEntry1 />} />
            <Route path='/asgb' element={<Appasgb />} />
            <Route path='/mt' element={<Appmt />} />
            <Route path='/mkd' element={<Appmkd />} />
            <Route path='/yemk' element={<Appyemk />} />
            <Route path='/ew' element={<Appew />} />
            <Route path='/mkep' element={<Appmkep />} />
          </Routes>
        
        </Router>
        </div>
    );
}
export default App;