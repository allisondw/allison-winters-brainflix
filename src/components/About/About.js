import React from "react";
import "../../styles/Main.scss";
import viewsSVG from "../../assets/images/icons/views.svg";
import likesSVG from "../../assets/images/icons/likes.svg";


const About = ({ videoData }) => {

    const formatTimestamp = (timestamp) => {
        const dateFormat = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Intl.DateTimeFormat('en-US', dateFormat).format(new Date(timestamp));
    };

    const {
        title,
        channel,
        description,
        views,
        likes,
        timestamp
    } = videoData;

    return (
        <div className="hero-details">
            <h1 className="hero-details__title">{title}</h1>
            <article className="hero-details__div">
                <div className="hero-details__left">
                    <h2 className="hero-details__channel">By {channel}</h2>
                    <span className="hero-details__timestamp">{formatTimestamp(timestamp)}</span>
                </div>
                <div className="hero-details__right">
                    <span className="hero-details__views"><img src={viewsSVG} className="hero-details__views-svg" alt=""/> {views}</span>
                    <span className="hero-details__likes"><img src={likesSVG} className="hero-details__likes-svg" alt=""/>{likes}</span>
                </div>
            </article>
            <p className="hero-details__description">{description}</p>
        </div>
    )
}

export default About;