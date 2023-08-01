import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
// import App from './App';
// import AppInput from './AppInput';
// import AppTime from './AppTime';
// import Prototype from './Prototype';
// import Inputmain from './Inputmain';
// import UserList from './UserList';
import AnimalsList from './AnimalsList';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <AnimalsList />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
