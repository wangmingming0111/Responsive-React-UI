import React, { useEffect, useState } from "react";
import { Link } from '@reach/router';
import { flexbox, styled } from "@mui/system";

import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDialogProvider as MaterialUIWalletDialogProvider,
  WalletMultiButton as MaterialUIWalletMultiButton,
  WalletConnectButton
} from '@solana/wallet-adapter-material-ui';

import { isMdScreen } from "../Utils";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);

const WalletButton = styled("div")(() => ({
  display: 'flex',
  flexDirection: 'row-reverse'
}))

const MainHeader = (props) => {

  const wallet = useWallet();

  useEffect(() => {
    const header = document.getElementById("main_header_relative_root");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {

      // console.log("window.pageYOffset = " + window.pageYOffset + ", sticky = " + sticky);
      // if (window.pageYOffset > sticky) {
      //   header.style.backgroundColor = "red";
      //   header.classList.add("sticky");
      //   totop.classList.add("show");
      // } else {
      //   header.style.backgroundColor = "green";
      //   header.classList.remove("sticky");
      //   totop.classList.remove("show");
      // }
  
      // if (!isMdScreen()) {
        if (window.pageYOffset > sticky) {
          header.style.backgroundColor = "rgb(71, 7, 127, 255)";
          header.style.borderBottom = "0.1vw solid grey";
          header.style.transition = "all 0.6s ease";
          totop.style.display = "display: block !important;";
          // header.classList.add("sticky");
          // totop.classList.add("show");
        } else {
          header.style.backgroundColor = "rgb(71, 7, 127, 0)";
          header.style.borderBottom = "0.0vw solid grey";
          header.style.transition = "all 0.6s ease";
          totop.style.display = "display: none !important;";
          // header.classList.remove("sticky");
          // totop.classList.remove("show");
        }
      // }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    // console.log(event.target);
    if (!event.target.matches('#main_header_menu_image') &&
        !event.target.matches('main_header_menu_link_class') &&
        !event.target.matches('#main_header_menu_link_id'))
    {
      // console.log("cursor is not in area of menu icon");

      var obj = document.getElementById("main_header_menu_dropdown_content");
      if (obj.style.display === "block") {
        obj.style.display = "none";
      }

      // if (document.getElementById("main_header_menu_dropdown_content").classList.contains("show") === true) {
      //   console.log("trying show class");
      //   document.getElementById("main_header_menu_dropdown_content").classList.remove("show");
      // }
    } else {
      // console.log("cursor is in area of menu icon");
    }
  }

  const onClickMenu = (e) => {
    var obj = document.getElementById("main_header_menu_dropdown_content");
    if (obj.style.display !== "block") {
      obj.style.display = "block";
    } else {
      obj.style.display = "none";
    }    
		// document.getElementById("main_header_menu_dropdown_content").classList.toggle("show");
  };

  const onActiveMenu = (e) => {
		document.getElementById("main_header_menu_image").src = "/img/Solmine/header_menu_1.png";
  };

	const onNormalMenu = (e) => {
		document.getElementById("main_header_menu_image").src = "/img/Solmine/header_menu.png";
  };

  const onActiveConnect = (e) => {
		document.getElementById("main_header_connect_image").src = "/img/Solmine/main/connect_1.png";
  };

	const onNormalConnect = (e) => {
		document.getElementById("main_header_connect_image").src = "/img/Solmine/main/connect.png";
  };

  const onClickConnect = (e) => {
    alert("connect clicked!");
  }

	return (
		<div 
			id="main_header_relative_root"
		>
			<div
				id="main_header_container"
			>
				<NavLink 
					id="main_header_mark_link"
					to="/"
				>
					<img
            id="main_header_mark_image"
						src="/img/Solmine/header_mark.png"
						alt="header mark img"
					/>
				</NavLink>

        <WalletButton
					id="main_header_wallet_link"
        >
          <MaterialUIWalletMultiButton 
            variant="text" 
            style={{
              border: "3px solid rgb(3, 202, 243)",
              fontWeight: 900,
              background: "transparent",
              borderRadius: '10px',
              color: 'white'
            }}
          />
        </WalletButton>

				{/* <div
					id="main_header_connect_link"
				>
					<img
            id="main_header_connect_image"
						src="/img/Solmine/main/connect.png"
						alt="main_header_connect_image"
            onMouseEnter={onActiveConnect}
            onMouseOut={onNormalConnect}
            onClick={onClickConnect}
          />
				</div> */}

				<div 
					id="main_header_menu_link_id"
          className="main_header_menu_link_class"
				>
					<img
            id="main_header_menu_image"
						src="/img/Solmine/header_menu.png"
						alt="header menu"
            onClick={onClickMenu}
            onMouseEnter={onActiveMenu}
            onMouseOut={onNormalMenu}
          />
          <div 
            id="main_header_menu_dropdown_content"
          >
            <NavLink 
              to="/main"
            >
              Home
            </NavLink>
            <NavLink 
              to="/"
            >
              Launch
            </NavLink>
            <NavLink 
              to="/mint"
            >
              Mint Crew
            </NavLink>
            <NavLink 
              to="/"
            >
              Whitepaper
            </NavLink>
          </div>
        </div>

			</div>
		</div>
	);
};

export default MainHeader;
