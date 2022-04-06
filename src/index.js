
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import App from './App';
import Caeser from './pages/Caeser';
import RailFence from './pages/RailFence';
import PlayFair from './pages/PlayFair';
import RowColumnT from './pages/RowColumnT';
import Baconian from './pages/Baconian';
import Vigenere from './pages/Vigenere';
import Atbash from './pages/Atbash';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="caeser" element={<Caeser />} />
      <Route path="railfence" element={<RailFence />} />
      <Route path="playfair" element={<PlayFair />} />
      <Route path="rc-transposition" element={<RowColumnT />} />
      <Route path="baconian" element={<Baconian />} />
      <Route path="vigenere" element={<Vigenere />} />
      <Route path="atbash" element={<Atbash />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


const card = document.querySelectorAll(".card")[0];

const dp = document.querySelectorAll(".dp-image img")[0];
const pose = document.querySelectorAll(".pose-image")[0];

card.addEventListener("mouseenter", () => {
  dp.style.transform = "scale(0)";
  pose.style.transition = "0.5s ease";
  pose.style.transform = "scale(1)";
});

card.addEventListener("mouseleave", () => {
  dp.style.transform = "scale(1)";
  pose.style.transform = "scale(0)";
});



