import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Router>
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="profiles" element={<Profile posts={props.posts} />} />
            <Route path="dialogs" element={<Dialogs dialogs={props.dialog} messages={props.message} />} />
            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path='settings' element={<Settings />} />
          </Routes>
        </div>
      </Router>


    </div >

  );
}

export default App;
