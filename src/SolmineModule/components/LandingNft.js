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

const LandingNft = (props) => {

	const onActive = (e) => {
		document.getElementById("landing_nft_mint_image").src = "/img/Solmine/landing/mint_active.png";
	};

	const onNormal = (e) => {
		document.getElementById("landing_nft_mint_image").src = "/img/Solmine/landing/mint_normal.png";
	};

	return (
		<div 
		id="landing_nft_relative_root"
		>
			<div
				id="landing_nft_container"
			>
				<div 
					id="landing_nft_left_side"
				>
				</div>

				<div
					id="landing_nft_desc_parent"
				>
					<div
						id="landing_nft_desc_title"
					>
						Are NFTs implemented?
					</div>
					<div
						id="landing_nft_desc_content"
					>
						As it stands, the Solmine is unique in its own right. But, why stop there? To gamify Solmine, there’s an option to add to your crew in order to mine more effectively and efficiently. Mint more astronauts to help you on your journey. On rare occasion, perhaps UFO’s and Aliens may come to assist, with their highly advanced technolog. Anything is possible, I mean, did humans Really build the Great Pyramids of Giza?            </div>
					</div>

				<div 
					id="landing_nft_middle_side"
				>
				</div>

				<img
					id="landing_nft_mark_image"
					src="/img/Solmine/landing/nft_mark.png"
					alt="landing luanch"
				/>

				<div 
					id="landing_nft_right_side"
				>
				</div>

				<img
					id="landing_nft_star_1"
					src="/img/Solmine/landing/star_4.png"
					alt="landing nft star 1"
				/>

				<img
					id="landing_nft_star_2"
					src="/img/Solmine/landing/star_1.png"
					alt="landing nft star 2"
				/>

				<img
					id="landing_nft_star_3"
					src="/img/Solmine/landing/star_1.png"
					alt="landing nft star 3"
				/>

				<NavLink 
					id="landing_nft_mint_link"
					to="/dashboard"
				>
					<img
						id="landing_nft_mint_image"
						src="/img/Solmine/landing/mint_normal.png"
						alt="landing luanch"
						onMouseEnter={onActive}
						onMouseOut={onNormal}
					/>
				</NavLink>

			</div>
		</div>
	);
};

export default LandingNft;
