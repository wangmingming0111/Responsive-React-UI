import React from 'react';
import { useState, useEffect } from 'react';
import { Router, Location, Redirect } from '@reach/router';
import { ToastContainer } from 'react-toastify';
import { createGlobalStyle } from 'styled-components';
// import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import ScrollToTopBtn from './components/ScrollToTop';
import Landing from './pages/Landing';
import Main from './pages/Main';
import Mint from './pages/Mint';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
  .wraper {
    // background-color: rgb(71, 7, 117);
    // background-color: black;
    // background-color: rgb(29, 0, 27);
    background-color: rgb(28, 3, 51);
    // background-image: linear-gradient(to right, red, green, red);
    // background-image: linear-gradient(to right, rgb(29, 0, 27), rgb(28, 3, 51), rgb(29, 0, 27));
    // background-image: linear-gradient(to right, rgb(0, 0, 0), rgb(28, 3, 51), rgb(0, 0, 0));
  }
  #particles-js {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
  }
`;

export const ScrollTop = ({ children, location }) => {
  useEffect(() => window.scrollTo(0, 0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const App = (props) => {

  useEffect(() => {
    // console.log("App component loading...");
    // console.log(process.env.REACT_APP_TELEGRAM_URL);

  }, [props]);

  // window.addEventListener('resize', (event) => {});
  window.onresize = (event) => {
    /* -------------------------------------------------------
                    Landing Page Resize Proc
    ------------------------------------------------------- */
		if (window.innerWidth <= 599)
		{
			document.getElementById("landing_luanch_link").style.width = "30vw";
			document.getElementById("landing_luanch_link").style.height = "12vw";
		}
    else
    {
      document.getElementById("landing_luanch_link").style.width = "20vw";
      document.getElementById("landing_luanch_link").style.height = "8vw";
    }

		if (window.innerWidth <= 599)
		{
			document.getElementById("landing_bottom_luanch_link").style.width = "30vw";
			document.getElementById("landing_bottom_luanch_link").style.height = "12vw";
			document.getElementById("landing_bottom_luanch_link").style.left = "35vw";
		}
    else
    {
      document.getElementById("landing_bottom_luanch_link").style.width = "20vw";
      document.getElementById("landing_bottom_luanch_link").style.height = "8vw";
      document.getElementById("landing_bottom_luanch_link").style.left = "40vw";
    }

    if (window.innerWidth <= 599)
    {
      document.getElementById("landing_header_luanch_link").style.width = "21vw";
      document.getElementById("landing_header_luanch_link").style.height = "8.1vw";
    }
    else
    {
      document.getElementById("landing_header_luanch_link").style.width = "8vw";
      document.getElementById("landing_header_luanch_link").style.height = "3vw";
    }

    if (window.innerWidth <= 599)
    {
      document.getElementById("landing_nft_mark_image").src = "/img/Solmine/nft_mark_mobile.png";
    }
    else
    {
      document.getElementById("landing_nft_mark_image").src = "/img/Solmine/nft_mark.png";
    }

    if (window.innerWidth <= 599)
    {
      document.getElementById("mint_back_image").src = "/img/Solmine/mint/background_mobile.png";
    }
    else
    {
      document.getElementById("mint_back_image").src = "/img/Solmine/mint/background.png";
    }
  };

  return (
    <div className="wraper" style={{ backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
    <div id="particles-js"></div>
      <GlobalStyles />
      <PosedRouter>
        <ScrollTop path="/">
          <Landing path="/" >
            <Redirect to="/" />
          </Landing>
          <Main path="/main" />
          <Mint path="/mint" />
        </ScrollTop>
      </PosedRouter>
      <ScrollToTopBtn />
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      /> */}
    </div>
  )
};
export default App;