import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from '@reach/router';

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

const Footer = (props) => {

  useEffect(() => {
    // console.log("Footer component loading...");
    
  }, [props]);

	const onActive_11 = (e) => {
		document.getElementById("footer_11_image").src = "/img/Solmine/11_1.png";
	};

	const onNormal_11 = (e) => {
		document.getElementById("footer_11_image").src = "/img/Solmine/11.png";
	};

	const onActive_12 = (e) => {
		document.getElementById("footer_12_image").src = "/img/Solmine/12_1.png";
	};

	const onNormal_12 = (e) => {
		document.getElementById("footer_12_image").src = "/img/Solmine/12.png";
	};

	const onActive_13 = (e) => {
		document.getElementById("footer_13_image").src = "/img/Solmine/13_1.png";
	};

	const onNormal_13 = (e) => {
		document.getElementById("footer_13_image").src = "/img/Solmine/13.png";
	};

	const onActive_14 = (e) => {
		document.getElementById("footer_14_image").src = "/img/Solmine/14_1.png";
	};

	const onNormal_14 = (e) => {
		document.getElementById("footer_14_image").src = "/img/Solmine/14.png";
	};

	const onActive_15 = (e) => {
		document.getElementById("footer_15_image").src = "/img/Solmine/15_1.png";
	};

	const onNormal_15 = (e) => {
		document.getElementById("footer_15_image").src = "/img/Solmine/15.png";
	};

	return (
		<div 
			id="footer_relative_root"
		>
			<div
				id="footer_container"
			>
        <a 
          href={process.env.REACT_APP_TELEGRAM_URL} 
          className="footer_link" 
          id="footer_11_link" 
          target="_blank" 
          title="Telegram Link" 
          rel="noreferrer"
        >
					<img
						className="footer_image"
						id="footer_11_image"
						src="/img/Solmine/11.png"
						alt="footer 11"
						onMouseEnter={onActive_11}
						onMouseOut={onNormal_11}
					/>
        </a>

        <a 
          href={process.env.REACT_APP_TWITTER_URL} 
          className="footer_link" 
          id="footer_12_link" 
          target="_blank" 
          title="Twitter Link" 
          rel="noreferrer"
        >
					<img
						className="footer_image"
						id="footer_12_image"
						src="/img/Solmine/12.png"
						alt="footer 12"
						onMouseEnter={onActive_12}
						onMouseOut={onNormal_12}
					/>
				</a>

        <a 
          href={process.env.REACT_APP_DISCORD_URL} 
          className="footer_link" 
          id="footer_13_link" 
          target="_blank" 
          title="Discord Link" 
          rel="noreferrer"
        >
					<img
						className="footer_image"
						id="footer_13_image"
						src="/img/Solmine/13.png"
						alt="footer 13"
						onMouseEnter={onActive_13}
						onMouseOut={onNormal_13}
					/>
				</a>

				<NavLink 
          			className="footer_link"
					id="footer_14_link"
					to="/dashboard"
				>
					<img
            			className="footer_image"
						id="footer_14_image"
						src="/img/Solmine/14.png"
						alt="footer 14"
						onMouseEnter={onActive_14}
						onMouseOut={onNormal_14}
					/>
				</NavLink>

				<NavLink
          			className="footer_link"
					id="footer_15_link"
					to="/dashboard"
				>
					<img
            			className="footer_image"
						id="footer_15_image"
						src="/img/Solmine/15.png"
						alt="footer 15"
						onMouseEnter={onActive_15}
						onMouseOut={onNormal_15}
					/>
				</NavLink>

			</div>
		</div>
	);
};
export default Footer;
