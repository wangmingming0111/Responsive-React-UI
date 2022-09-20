import React from 'react';
import { Link } from '@reach/router';

import Atropos from "atropos/react/atropos-react.esm";
import "atropos/atropos.css";

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

const LandingLuanch = (props) => {

  const onActive = (e) => {
		document.getElementById("landing_luanch_image").src = "/img/Solmine/landing/luanch_active.png";
		document.getElementById("landing_luanch_link").style.width = "26vw";
		document.getElementById("landing_luanch_link").style.height = "8vw";
		if (window.innerWidth <= 599)
		{
			document.getElementById("landing_luanch_link").style.width = "39vw";
			document.getElementById("landing_luanch_link").style.height = "12vw";
		}
  };

	const onNormal = (e) => {
		document.getElementById("landing_luanch_image").src = "/img/Solmine/landing/luanch_normal.png";
		document.getElementById("landing_luanch_link").style.width = "20vw";
		document.getElementById("landing_luanch_link").style.height = "8vw";
		if (window.innerWidth <= 599)
		{
			document.getElementById("landing_luanch_link").style.width = "30vw";
			document.getElementById("landing_luanch_link").style.height = "12vw";
		}
  };

	return (
		<div 
			id="landing_luanch_relative_root"
		>
			<div
				id="landing_luanch_container"
			>
				<Atropos
					id="landing_luanch_atropos"
					shadow={false}
					highlight={false}
					style={{
						width: "60vw",
						height: "50vw",
					}}
				>
					<img
						style={{
							position: "absolute",
							width: "80%",
							height: "80%",
							top: "10%",
							left: "10%",
						}}
						src="/img/Solmine/landing/animation/five.png"
						data-atropos-offset="-10%"
						alt=""
					/>
					<img
						style={{
							position: "absolute",
							width: "25%",
							height: "25%",
							top: "20%",
							left: "10%",
						}}
						src="/img/Solmine/landing/animation/four.png"
						data-atropos-offset="-5%"
						alt=""
					/>
					<img
						style={{
							position: "absolute",
							width: "18%",
							height: "40%",
							top: "30%",
							left: "62%",
						}}
						src="/img/Solmine/landing/animation/three.png"
						data-atropos-offset="5%"
						alt=""
					/>
					<img
						style={{
							position: "absolute",
							width: "80%",
							height: "62%",
							top: "32%",
							left: "10%",
						}}
						src="/img/Solmine/landing/animation/two.png"
						data-atropos-offset="10%"
						alt=""
					/>
				</Atropos>

				<NavLink 
					id="landing_luanch_link"
					to="/main"
				>
					<img
						id="landing_luanch_image"
						src="/img/Solmine/landing/luanch_normal.png"
						alt="landing luanch"
						onMouseEnter={onActive}
						onMouseOut={onNormal}
					/>
				</NavLink>

				<img
					id="landing_luanch_star_1"
					src="/img/Solmine/landing/star_1.png"
					alt="landing luanch star 1"
				/>

				<img
					id="landing_luanch_star_2"
					src="/img/Solmine/landing/star_1.png"
					alt="landing luanch star 2"
				/>

				<img
					id="landing_luanch_star_3"
					src="/img/Solmine/landing/star_1.png"
					alt="landing luanch star 3"
				/>

				<img
					id="landing_luanch_star_4"
					src="/img/Solmine/landing/star_1.png"
					alt="landing luanch star 4"
				/>

			</div>
		</div>
	);
};

export default LandingLuanch;
