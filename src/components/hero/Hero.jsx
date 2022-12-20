import React from "react";
import Video from "../../assets/maldivesVideo.mp4";
import "./Hero.css";
import { AiOutlineSearch } from "react-icons/ai";

function Hero() {
    return (
        <div name="hero" className="hero">
            <video
                src={Video}
                type="video/mp4"
                autoPlay
                loop
                muted
                id="video"
            ></video>
            <div className="overlay"></div>
            <div className="content">
                <h1>First Class Travel</h1>
                <h2>Top 1% Locations Worldwide</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder="Search Destinations" />
                    </div>
                    <div>
                        <button>
                            <AiOutlineSearch className="icon" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Hero;
