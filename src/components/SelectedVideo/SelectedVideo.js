import Hero from "../Hero/Hero.js";
import About from "../About/About.js";
import Comments from "../Comments/Comments.js";
import NextVideo from "../NextVideo/NextVideo.js";
import "../../styles/Main.scss";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SelectedVideo = () => {
  const [videos, setVideos] = useState(null); 
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const { videoId } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await axios.get("http://localhost:8080/videos");
        setVideos(res.data);
        const idToFetch = videoId || res.data[0].id;
        getSelectedVideo(idToFetch);
      } catch (error) {
      console.error("Error getting videos: ", error);
      }
    };  
    getVideos();
  }, [videoId]);

  const getSelectedVideo = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/videos/${id}`);
      setSelectedVideo(res.data);
    } catch (error) {
      console.error("error fetching selected video: ", error);
    }
  };

  if (!videos || !selectedVideo) {
    return <p>Loading...</p>;
  }

  const filteredVideos = videos.filter((video) => video.id !== selectedVideo.id);
    return (
        <section>
        <Hero videoData = {selectedVideo} />
        <section className="main-below">
          <article className="main__left-column">
            <About videoData = {selectedVideo} />
            <Comments videoData = {selectedVideo} />
          </article>
          <article className="main__sidebar">
            <NextVideo filteredVideos = {filteredVideos} videoData={selectedVideo} />
          </article>
        </section>
      </section>
    )
}
export default SelectedVideo;