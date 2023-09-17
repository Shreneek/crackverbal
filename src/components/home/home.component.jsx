import React from "react";
import "./home.css";

function Home() {
    return (
        <div className="section">
            <h1 className="section-title red-color">"CRACK THE GMAT" PREPARATION LIVE ONLINE COURSE 2021 </h1>
            <div className="video-container">
                <div>
                    <h4>Access FREE Trial Where We Reveal Effective Techniques </h4>
                    <h4>To Crack The 700+ GMAT Score in 60 Days </h4>
                    <h5 style={{color:'blue'}}>CLICK BELOW TO GET INSTANT FREE TRIAL ACCESS ON HOW TO CRACK THE GMAT WITHIN 60 DAYS</h5>
                    <button className="testimonials-btn red-color" type="submit">
                        Access Trial Course
                    </button>
                </div>
                <iframe
                    className="video-data"
                    src="https://www.youtube.com/embed/f8C9LD66BSo"
                    title="YouTube Video"
                ></iframe>
            </div>
        </div>
    );
}

export default Home;
