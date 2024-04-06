import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-dom';
import Welcome from './pages/welcome';
import Home from './pages/home';
import Biofloc from './pages/biofloc';
import Mycoculture from './pages/mycoculture';
import Hydroponic from './pages/hydroponic';

export default function Portofolio() {
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route index element={<Home />} />
    <Route path="btf" element={<Biofloc />} />
    <Route path="mcctr" element={<Mycoculture />} />
    <Route path="hpnc" element={<Hydroponic />} />
    <Route path="*" element={<NoPage />} />
  </Routes>
  </BrowserRouter>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Portofolio />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
