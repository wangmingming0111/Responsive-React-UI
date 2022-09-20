import React from 'react';
import { useState, useEffect } from 'react';

import MintBack from '../components/MintBack';
import MintHeader from '../components/MintHeader';
import MintLogo from '../components/MintLogo';
import MintAction from '../components/MintAction';
import MintActionSecondDesc from '../components/MintActionSecondDesc';
import MintNote from '../components/MintNote';
import FloatingBar from '../components/FloatingBar';

const Mint = (props) => {
  useEffect(() => {
    // console.log("Mint component loading...");

  }, [props]);

  return (
    <div 
      id="mint_home"
    >
      <FloatingBar />

      <MintBack />
      <MintHeader />
      <div 
        id="mint_wrapper"
      >
        <MintLogo />
        <MintAction />
        <MintActionSecondDesc />
        <MintNote />
      </div>
    </div>
  )
};

export default Mint;
