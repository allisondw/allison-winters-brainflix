import "../src/styles/Main.scss";
import { useState } from 'react';
import videoDetailsData from "../src/data/video-details.json"
import videosList from "../src/data/videos.json";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Comments from "./components/Comments/Comments.js";
import NextVideo from "./components/NextVideo/NextVideo.js";
import { useEffect } from 'react';

const App = () => {



  const [videoData, setVideoData] = useState(videoDetailsData[0]);


  const handleVideoChange = ((newVideoID) => {
    console.log('Selected Video ID:', newVideoID);
    const selectedVideo = videoDetailsData.find((video) => video.id === newVideoID);
    console.log('Selected Video:', selectedVideo); 
    if (selectedVideo) {
      setVideoData(selectedVideo);
    } else {
        console.error('Video not found:', newVideoID);
    }
  })

  useEffect(() => {
    console.log('Updated videoData:', videoData);
  }, [videoData]);

  const filteredVideos = videosList.filter((video) => video.id !== videoData.id);
  return (
    <body>
        <Header />
      <main>
        
        <section className="main__left-column">
        <Hero videoData = {videoData} />
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