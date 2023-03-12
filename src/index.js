import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogData = [
  { id: '1', name: 'Polina' },
  { id: '2', name: 'Sasha' },
  { id: '3', name: 'Andrey' }
]

let messagesData = [
  { id: '1', message: 'Hi' },
  { id: '2', message: 'How is you?' },
  { id: '3', message: 'Yo!' }
]

let postsData = [
  { id: '1', message: 'Hi, how are you?', likesCount: '12' },
  { id: '2', message: "It's my first post", likesCount: '10' },
  { id: '3', message: 'Marina Z', likesCount: 'лучше всех' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialog={dialogData} message={messagesData} posts={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
