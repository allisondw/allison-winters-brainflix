import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideosEndpoint } from "../../utils/utils.js";
import { getVideoEndpoint } from "../../utils/utils.js";
import "../styles/Main.scss";
import Header from "../../components/Header/Header.js";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo.js";

const HomePage = () => {
  const [videos, setVideos] = useState(null); 
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const { videoId } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      const res = await axios.get(getVideosEndpoint());
      setVideos(res.data);
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

  const filteredVideos = videos.filter((video) => video.id !== selectedVideo.id);

  return (
    <section>
      <Header />
      <SelectedVideo filteredVideos={filteredVideos} videoData={selectedVideo} />
    </section>
  );
};
export default HomePage;