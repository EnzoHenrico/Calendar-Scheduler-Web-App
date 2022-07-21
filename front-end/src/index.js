import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Signup from './pages/signup';
import Signin from './pages/signin';
import ErrorPage from './pages/errorPage';
import styles from './Index.module.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className={styles.wrapper}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </div>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
