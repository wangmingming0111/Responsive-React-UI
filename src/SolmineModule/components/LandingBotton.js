import React from 'react';
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

const LandingBotton = (props) => {

	const onActive = (e) => {
		document.getElementById("landing_bottom_luanch_image").src = "/img/Solmine/landing/luanch_active.png";
		document.getElementById("landing_bottom_luanch_link").style.width = "26vw";
		document.getElementById("landing_bottom_luanch_link").style.height = "8vw";
		document.getElementById("landing_bottom_luanch_link").style.left = "37vw";
		if (window.innerWidth <= 599)
		{
			document.getElementById("landing_bottom_luanch_link").style.width = "39vw";
			document.getElementById("landing_bottom_luanch_link").style.height = "12vw";
			document.getElementById("landing_bottom_luanch_link").style.left = "30.5vw";
		}
	};

	const onNormal = (e) => {
		document.getElementById("landing_bottom_luanch_image").src = "/img/Solmine/landing/luanch_normal.png";
		document.getElementById("landing_bottom_luanch_link").style.width = "20vw";
		document.getElementById("landing_bottom_luanch_link").style.height = "8vw";
		document.getElementById("landing_bottom_luanch_link").style.left = "40vw";
		if (window.innerWidth <= 599)
		{
			document.getElementById("landing_bottom_luanch_link").style.width = "30vw";
			document.getElementById("landing_bottom_luanch_link").style.height = "12vw";
			document.getElementById("landing_bottom_luanch_link").style.left = "35vw";
		}
	};

	return (
		<div 
			id="landing_bottom_relative_root"
		>
			<div
				id="landing_bottom_container"
			>
				<img
					id="landing_bottom_image"
					src="/img/Solmine/landing/bottom.png"
					alt="landing bottom"
				/>

				<NavLink 
					id="landing_bottom_luanch_link"
					to="/main"
				>
					<img
						id="landing_bottom_luanch_image"
						src="/img/Solmine/landing/luanch_normal.png"
						alt="landing bottom luanch"
						onMouseEnter={onActive}
						onMouseOut={onNormal}
					/>
				</NavLink>

			</div>
		</div>
	);
};

export default LandingBotton;
