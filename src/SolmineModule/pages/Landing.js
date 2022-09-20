import React from 'react';
import { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';

import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';
import LandingLuanch from '../components/LandingLuanch';
import LandingWhat from '../components/LandingWhat';
import LandingHow from '../components/LandingHow';
import LandingNft from '../components/LandingNft';
import LandingBotton from '../components/LandingBotton';
import FloatingBar from '../components/FloatingBar';

const Landing = (props) => {
  useEffect(() => {
    // console.log("Landing component loading...");

  }, [props]);

  return (
    <div 
      id="landing_home"
    >
      <video 
        id="landing_luanch_container_video"
        poster="" 
        autoPlay={true} 
        loop={true} 
        muted
      >
        <source 
          src="./video/video_solmine.mp4" 
          type="video/mp4"
        >
        </source>
      </video>

      <FloatingBar />

      <LandingHeader />

      <div 
        id="landing_wrapper"
      >
        <div
          id="landing_solmine_advertisement"
        >
          <ReactTypingEffect
            text={[
              "4% per day", 
              "NFT Crew Members APY Boost", 
              "Future Multi-Project NFT Utility" 
            ]}
            speed={"60"} 
            eraseSpeed={"30"} 
            eraseDelay={"3000"} 
            typingDelay={"30"}
          />
        </div>

        <LandingLuanch />
        <LandingWhat />
        <LandingHow />
        <LandingNft />
        <LandingBotton />

      </div>

      <Footer />
    </div>
  )
};

export default Landing;