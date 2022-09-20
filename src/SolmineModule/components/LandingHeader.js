import React, { useEffect, useState } from "react";
import { Link } from '@reach/router';
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

const LandingHeader = (props) => {

  useEffect(() => {
    const header = document.getElementById("landing_header_relative_root");
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
    if (!event.target.matches('#landing_header_menu_image') &&
        !event.target.matches('landing_header_menu_link_class') &&
        !event.target.matches('#landing_header_menu_link_id'))
    {
      // console.log("cursor is not in area of menu icon");

      var obj = document.getElementById("landing_header_menu_dropdown_content");
      if (obj.style.display === "block") {
        obj.style.display = "none";
      }

      // if (document.getElementById("landing_header_menu_dropdown_content").classList.contains("show") === true) {
      //   console.log("trying show class");
      //   document.getElementById("landing_header_menu_dropdown_content").classList.remove("show");
      // }
    } else {
      // console.log("cursor is in area of menu icon");
    }
  }

  const onClickMenu = (e) => {
    var obj = document.getElementById("landing_header_menu_dropdown_content");
    if (obj.style.display !== "block") {
      obj.style.display = "block";
    } else {
      obj.style.display = "none";
    }    
		// document.getElementById("landing_header_menu_dropdown_content").classList.toggle("show");
  };

  const onActiveMenu = (e) => {
		document.getElementById("landing_header_menu_image").src = "/img/Solmine/header_menu_1.png";
  };

	const onNormalMenu = (e) => {
		document.getElementById("landing_header_menu_image").src = "/img/Solmine/header_menu.png";
  };

  const onActiveLuanch = (e) => {
		document.getElementById("landing_header_luanch_image").src = "/img/Solmine/landing/luanch_active.png";
		document.getElementById("landing_header_luanch_link").style.width = "10.1vw";
		document.getElementById("landing_header_luanch_link").style.height = "3vw";
    if (window.innerWidth <= 599)
    {
      document.getElementById("landing_header_luanch_link").style.width = "26.4vw";
      document.getElementById("landing_header_luanch_link").style.height = "8.1vw";
    }
  };

	const onNormalLuanch = (e) => {
		document.getElementById("landing_header_luanch_image").src = "/img/Solmine/landing/luanch_normal.png";
		document.getElementById("landing_header_luanch_link").style.width = "8vw";
		document.getElementById("landing_header_luanch_link").style.height = "3vw";
    if (window.innerWidth <= 599)
    {
      document.getElementById("landing_header_luanch_link").style.width = "21vw";
      document.getElementById("landing_header_luanch_link").style.height = "8.1vw";
    }
  };

	return (
		<div 
			id="landing_header_relative_root"
		>
			<div
				id="landing_header_container"
			>
				<NavLink 
					id="landing_header_mark_link"
					to="/"
				>
					<img
            id="landing_header_mark_image"
						src="/img/Solmine/header_mark.png"
						alt="header mark img"
					/>
				</NavLink>

				<NavLink 
					id="landing_header_luanch_link"
					to="/main"
				>
					<img
            id="landing_header_luanch_image"
						src="/img/Solmine/landing/luanch_normal.png"
						alt="header luanch img"
            onMouseEnter={onActiveLuanch}
            onMouseOut={onNormalLuanch}
          />
				</NavLink>

				<div 
					id="landing_header_menu_link_id"
          className="landing_header_menu_link_class"
				>
					<img
            id="landing_header_menu_image"
						src="/img/Solmine/header_menu.png"
						alt="header menu"
            onClick={onClickMenu}
            onMouseEnter={onActiveMenu}
            onMouseOut={onNormalMenu}
          />
          <div 
            id="landing_header_menu_dropdown_content"
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
export default LandingHeader;
