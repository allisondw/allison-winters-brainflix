import "../src/styles/Main.scss";
import { useState } from 'react';
import videoDetailsData from "../src/data/video-details.json"
import videosList from "../src/data/videos.json";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Comments from "./components/Comments/Comments.js";
import NextVideo from "./components/NextVideo/NextVideo.js";

const App = () => {

  const [videoData, setVideoData] = useState(videoDetailsData[0]);

  const handleVideoChange = (newVideo) => {
    const selectedVideo = videosList.find((video) => video.id === newVideo)
    setVideoData(selectedVideo);
  }

  const filteredVideos = videosList.filter((video) => video.id !== videoData.id);
  return (
    <body>
        <Header />
      <main>
        <Hero videoData = {videoData} />
        
        <section className="main__left-column">
          <Comments videoData = {videoData} />
        </section>
        <section className="main__sidebar">
          <NextVideo videos = {filteredVideos}
          onVideoSelect = {handleVideoChange}
          currentVideoID = {videoData.id}/>
        </section>


      </main>
    </body>
  )
}


export default App;