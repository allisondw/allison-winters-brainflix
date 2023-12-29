import React from "react";
import "../../styles/Main.scss";

const NextVideo = ({ videos, onVideoSelect }) => {

    return (
        <section className="videos">
            <h3 className="videos__section-header">Next Videos</h3>
            {videos.map(video => (
                <article 
                    className="videos__item"
                    key = {video.id}
                    onClick = {() => {
                        console.log('Video ID:', video.id);
                        onVideoSelect(video.id)}
                    }>
                    <div className="videos__item--thumbnail"><img src={video.image} alt={video.title} className="videos__item--thumbnail-img"/></div>
                    <div className="videos__item--body">
                        <p className="videos__item--body-title">{video.title}</p>    
                        <p className="videos__item--body-channel">{video.channel}</p>
                    </div>
                </article>
            ))}
        </section>
    )
}


export default NextVideo;