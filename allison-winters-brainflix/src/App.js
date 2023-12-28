import "../src/styles/Main.scss";
import { useState } from 'react';
import videoDetailsData from "../src/data/video-details.json"
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Comments from "./components/Comments/Comments.js";

const App = () => {

  const [videoData, setVideoData] = useState(videoDetailsData[0]);

  // const handleVideoChange = (newVideo) => {
  //   setVideoData(newVideo);
  // }
  return (
    <body>
        <Header />
      <main>
        <section className="main__left-column">
          <Hero videoData = {videoData} />
          <Comments videoData = {videoData} />
        </section>
        <section className="main__sidebar">
          {/* <NextVideo videos = { videoDetailsData }
          onVideoSelect = {handleVideoChange}
          currentVideoID = {videoData.id}/> */}
        </section>


      </main>
    </body>
  )
}


export default App;