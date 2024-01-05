import "../src/styles/Main.scss";
import { useState } from 'react';
import videoDetailsData from "../src/data/video-details.json"
import HomePage from "./pages/HomePage.js";
import VideoUploadPage from "./pages/VideoUploadPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [videoData, setVideoData] = useState(videoDetailsData[0]);
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage videos = {videoDetailsData} />} />
          <Route path='/videos/:videoId' element={<HomePage videoData={videoData} />} />
          <Route path='upload' element={<VideoUploadPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;