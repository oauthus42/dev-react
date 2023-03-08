import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';


const App = () => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <BrowserRouter>
        <Routes>
            <Route path="profiles" element={<Profile />} />
            <Route path="dialogs" element={<Dialogs />} />
            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path='settings' element={<Settings />} />
          </Routes>
          </BrowserRouter>
        </div>
      </div>
   
  );
}

export default App;
