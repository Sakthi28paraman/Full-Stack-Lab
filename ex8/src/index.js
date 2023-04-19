import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ImgSlider from './App';
import reportWebVitals from './reportWebVitals';
import SearchBox from './Searchbox';
// import ImgSlider from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImgSlider />
    {/* <SearchBox /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
