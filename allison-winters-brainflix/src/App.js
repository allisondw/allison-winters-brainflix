import "../src/styles/Main.scss";
import { useState } from 'react';
import videoDetailsData from "../src/data/video-details.json"
import videosList from "../src/data/videos.json";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import About from "./components/About/About.js";
import Comments from "./components/Comments/Comments.js";
import NextVideo from "./components/NextVideo/NextVideo.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const [videoData, setVideoData] = useState(videoDetailsData[0]);

  const handleVideoChange = ((newVideoID) => {
    const selectedVideo = videoDetailsData.find((video) => video.id === newVideoID);
    if (selectedVideo) {
      setVideoData(selectedVideo);
    } else {
        console.error('Video not found:', newVideoID);
    }
  })

  const filteredVideos = videosList.filter((video) => video.id !== videoData.id);
  return (
    <body>
        <Header />
      <main>
        <Hero videoData = {videoData} />
        <section className="main-below">
          <article className="main__left-column">
            <About videoData = {videoData} />
            <Comments videoData = {videoData} />
          </article>
          <article className="main__sidebar">
            <NextVideo videos = {filteredVideos}
            onVideoSelect = {handleVideoChange}
            currentVideoID = {videoData.id}/>
          </article>
        </section>
      </main>
    </body>
  )
}
export default App;