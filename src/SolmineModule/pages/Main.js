import React from 'react';
import { useState, useEffect } from 'react';

import MainBack from '../components/MainBack';
import MainHeader from '../components/MainHeader';
import MainLogo from '../components/MainLogo';
import MainState from '../components/MainState';
import MainPortal from '../components/MainPortal';
import MainReferral from '../components/MainReferral';
import FloatingBar from '../components/FloatingBar';

const Main = (props) => {
  useEffect(() => {
    // console.log("Main component loading...");

  }, [props]);

  return (
    <div 
      id="main_home"
    >
      <FloatingBar />

      <MainBack />
      <MainHeader />
      <div 
        id="main_wrapper"
      >
        <MainLogo />
        <MainState />
        <MainPortal />
        <MainReferral />      
      </div>
    </div>
  )
};

export default Main;