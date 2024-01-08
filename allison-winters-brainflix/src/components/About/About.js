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
        <div className="hero__details">
            <h1 className="hero__details--title">{title}</h1>
            <article className="hero__details-div">
                <div className="hero__details-div--left">
                    <h2 className="hero__details-div--channel">By {channel}</h2>
                    <span className="hero__details-div--timestamp">{formatTimestamp(timestamp)}</span>
                </div>
                <div className="hero__details-div--right">
                    <span className="hero__details-div--views"><img src={viewsSVG} className="hero__details-div--views-svg" alt=""/> {views}</span>
                    <span className="hero__details-div--likes"><img src={likesSVG} className="hero__details-div--likes-svg" alt=""/>{likes}</span>
                </div>
            </article>
            <p className="hero__details--description">{description}</p>
        </div>
    )
}

export default About;