import React from 'react';

import Atropos from "atropos/react/atropos-react.esm";
import "atropos/atropos.css";

const MainLogo = (props) => {

	return (
		<div 
			id="main_logo_relative_root"
		>
			<div
				id="main_logo_container"
			>
				<Atropos
					id="main_logo_atropos"
					shadow={false}
					highlight={false}
					style={{
						width: "480px",
						height: "400px",
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
						data-atropos-offset="0%"
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
						data-atropos-offset="5%"
						alt=""
					/>
					<img
						style={{
							position: "absolute",
							width: "60%",
							height: "10%",
							top: "75%",
							left: "20%",
						}}
						src="/img/Solmine/landing/animation/one.png"
						data-atropos-offset="10%"
						alt=""
					/>
				</Atropos>
			</div>
		</div>
	);
};

export default MainLogo;
