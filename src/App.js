import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Friends from './components/Navbar/Friends/Friends';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Router>
        <Navbar state={props.state.dialogsPages}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="profiles" element={<Profile state={props.state.profilePages} />} />
            <Route path="dialogs" element={<Dialogs state={props.state.dialogsPages} />} />
            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path='settings' element={<Settings />} />
            <Route path='friends' element={<Friends state={props.state.dialogsPages} />} />
          </Routes>
        </div>
      </Router>
      <Friends state={props.state.dialogsPages} />
    </div >
  );
}

export default App;
