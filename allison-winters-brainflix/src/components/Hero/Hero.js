import React from "react";
import "../../styles/Main.scss";

const Hero = ({videoData}) => {

    const { image } = videoData;

    return (
        <section className="hero">
            <div className="hero__video-container">
                <video className="hero__video" controls poster={image} />
            </div>
        </section>
    );
}

export default Hero;