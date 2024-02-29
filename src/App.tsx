import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import KakaoMapPage from "./pages/KakaoMapPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/map" element={<KakaoMapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
