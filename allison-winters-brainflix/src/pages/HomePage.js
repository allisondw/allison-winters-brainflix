import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideosEndpoint } from "../utils/utils.js";
import { getVideoEndpoint } from "../utils/utils.js";
import "../styles/Main.scss";
import Header from "../components/Header/Header.js";
import SelectedVideo from "../components/SelectedVideo/SelectedVideo.js";


// const HomePage = () => {
//   const [videos, setVideos] = useState(null);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const { videoId } = useParams();

//   useEffect(() => {
//     const getVideos = async () => {
//       let res = await axios.get(getVideosEndpoint());
//       setVideos(res.data);
//       if (!videoId) {
//         setSelectedVideo(res.data[0]);
//       }
//     };
//     getVideos()
//   }, [videoId]);

//   useEffect(() => {
//     if (videoId) {
//       getSelectedVideo(videoId);
//       return selectedVideo;
//     }
//   }, [videoId]); 
//   console.log("selected: ", selectedVideo);

 

//   const getSelectedVideo = async (videoId) => {
//     let res = await axios.get(getVideoEndpoint(videoId));
//     setSelectedVideo(res.data);
//   };

//   if (!videos || !selectedVideo) {
//     return <p>Loading...</p>;
//   }

//   const filteredVideos = videos.filter((video) => video.id !== selectedVideo.id);

//   return (
//     <section>
//       <Header />
//       <SelectedVideo filteredVideos={filteredVideos} videoData={selectedVideo}/>
//     </section>
//   );
// }
// export default HomePage;

const HomePage = () => {
  const [videos, setVideos] = useState(null);  // Shortened video objects
  const [selectedVideo, setSelectedVideo] = useState(null);  // Extended video object
  const { videoId } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      const res = await axios.get(getVideosEndpoint());
      setVideos(res.data);
      // Fetch extended details for either the selected video or the first video
      const idToFetch = videoId || res.data[0].id;
      getSelectedVideo(idToFetch);
    };
    getVideos();
  }, [videoId]);

  const getSelectedVideo = async (id) => {
    const res = await axios.get(getVideoEndpoint(id));
    setSelectedVideo(res.data);
  };

  if (!videos || !selectedVideo) {
    return <p>Loading...</p>;
  }

  // Filter out the selected video from the navbar list
  const filteredVideos = videos.filter((video) => video.id !== selectedVideo.id);

  return (
    <section>
      <Header />
      <SelectedVideo filteredVideos={filteredVideos} videoData={selectedVideo} />
    </section>
  );
};
export default HomePage;