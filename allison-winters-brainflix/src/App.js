import "../src/styles/Main.scss";
import { useState } from 'react';
import videoDetailsData from "../src/data/video-details.json"

import HomePage from "./pages/HomePage.js";
import VideoUploadPage from "./pages/VideoUploadPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const App = () => {

//   const [videoData, setVideoData] = useState(videoDetailsData[0]);

//   const handleVideoChange = ((newVideoID) => {
//     const selectedVideo = videoDetailsData.find((video) => video.id === newVideoID);
//     if (selectedVideo) {
//       setVideoData(selectedVideo);
//     } else {
//         console.error('Video not found:', newVideoID);
//     }
//   })

//   const filteredVideos = videosList.filter((video) => video.id !== videoData.id);
//   return (
//     <body>
//         <Header />
//       <main>
//         <Hero videoData = {videoData} />
//         <section className="main-below">
//           <article className="main__left-column">
//             <About videoData = {videoData} />
//             <Comments videoData = {videoData} />
//           </article>
//           <article className="main__sidebar">
//             <NextVideo videos = {filteredVideos}
//             onVideoSelect = {handleVideoChange}
//             currentVideoID = {videoData.id}/>
//           </article>
//         </section>
//       </main>
//     </body>
//   )
// }
// export default App;

const App = () => {
  const [videoData, setVideoData] = useState(videoDetailsData[0]);
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage videoData = {videoData} />} />
          <Route path='/videos/:videoId' element={<HomePage videoData={videoData} />} />
          <Route path='upload' element={<VideoUploadPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;