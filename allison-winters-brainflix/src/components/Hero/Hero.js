import React from "react";
import "../../styles/Main.scss";
import { useParams } from "react-router-dom";

const Hero = ({videos = []}) => {

    const { videoId } = useParams();
    const video = videos.find(video => video.id === videoId);
    console.log("video data is: ", video);

    if(!video || videos.length === 0) {
        return(<div>Loading...</div>);
    }

    return (
        <section className="hero">
            <div className="hero__video-container">
                <video className="hero__video" controls poster={video.image} />
            </div>
        </section>
    );
}

export default Hero;