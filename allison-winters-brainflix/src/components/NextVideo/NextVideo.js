import React from "react";
import "../../styles/Main.scss";
import { Link } from 'react-router-dom';

const NextVideo = ({ videos }) => {
    return (
        <section className="videos">
            <h3 className="videos__section-header">Next Videos</h3>
            {videos.map(video => (
                <Link to={`/video/${video.id}`} key={video.id} className="videos__item-link">
                    <article className="videos__item">
                        <div className="videos__item--thumbnail">
                            <img src={video.image} alt={video.title} className="videos__item--thumbnail-img"/>
                        </div>
                        <div className="videos__item--body">
                            <p className="videos__item--body-title">{video.title}</p>    
                            <p className="videos__item--body-channel">{video.channel}</p>
                        </div>
                    </article>
                </Link>
            ))}
        </section>
    )
}


export default NextVideo;
