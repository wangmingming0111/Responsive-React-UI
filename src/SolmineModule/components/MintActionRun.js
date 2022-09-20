import React from 'react';
import {useState, useEffect} from 'react';

const MintActionRun = (props) => {

  const [solCount, setSolCount] = useState(1);

  const onActiveMint = (e) => {
		document.getElementById("mint_action_run_mint").src = "/img/Solmine/mint/mint_1.png";
  };
	const onNormalMint = (e) => {
		document.getElementById("mint_action_run_mint").src = "/img/Solmine/mint/mint.png";
  };

  const onActivePlus = (e) => {
		document.getElementById("mint_action_run_control_plus").src = "/img/Solmine/mint/plus_1.png";
  };
	const onNormalPlus = (e) => {
		document.getElementById("mint_action_run_control_plus").src = "/img/Solmine/mint/plus.png";
  };

  const onActiveMinus = (e) => {
		document.getElementById("mint_action_run_control_minus").src = "/img/Solmine/mint/minus_1.png";
  };
	const onNormalMinus = (e) => {
		document.getElementById("mint_action_run_control_minus").src = "/img/Solmine/mint/minus.png";
  };

  const onClickPlus = (e) => {
    let curSolCount = solCount;
    curSolCount++;
    if (curSolCount < 0) {
      curSolCount = 0;
    }
    setSolCount(curSolCount);
  };
  const onClickMinus = (e) => {
    let curSolCount = solCount;
    curSolCount--;
    if (curSolCount < 1) {
      curSolCount = 1;
    }
    setSolCount(curSolCount);
  };

	return (
		<div 
			id="mint_action_run_container"
		>
      <div
        id="mint_action_run_content"
      >
        {/* nft photo */}
        <div
          id="mint_action_run_photo"
        >
          <img
            id="mint_action_run_photo_nft"
            src="/img/Solmine/mint/nft_one.png"
            alt="mint_action_run_photo_nft"
          />
        </div>

        <div
          id="mint_action_run_unit_bar_wrapper_1"
        >
          <span
            id="mint_action_run_unit_1_1"
          >
            ASTRONAUT
          </span>
          <span
            id="mint_action_run_unit_1_2"
          >
            1 SOL
          </span>
        </div>

        <div
          id="mint_action_run_splitter_bar_wrapper_1"
        >
          <img
            id="mint_action_run_splitter_bar_1"
            src="/img/Solmine/mint/splitter_bar.png"
            alt="mint_action_run_splitter_bar_1"
          />
        </div>

        <div
          id="mint_action_run_control_wrapper"
        >
          <div
            id="mint_action_run_control_minus_wrapper"
          >
            <img
              id="mint_action_run_control_minus"
              src="/img/Solmine/mint/minus.png"
              alt="mint_action_run_control_minus"
              onMouseEnter={onActiveMinus}
              onMouseOut={onNormalMinus}
              onClick={onClickMinus}
            />
          </div>
          <div
            id="mint_action_run_control_sol_count_wrapper"
          >
            <span
              id="mint_action_run_control_sol_count"
            >
              {solCount}
            </span>
          </div>
          <div
            id="mint_action_run_control_plus_wrapper"
          >
            <img
              id="mint_action_run_control_plus"
              src="/img/Solmine/mint/plus.png"
              alt="mint_action_run_control_plus"
              onMouseEnter={onActivePlus}
              onMouseOut={onNormalPlus}
              onClick={onClickPlus}
            />
          </div>
        </div>

        <div
          id="mint_action_run_unit_bar_wrapper_2"
        >
          <span
            id="mint_action_run_unit_2_1"
          >
            COST
          </span>
          <img
            id="mint_action_run_unit_2_2"
            src="/img/Solmine/mint/sol_mark.png"
            alt="mint_action_run_unit_2_2"
          />
          <span
            id="mint_action_run_unit_2_3"
          >
            {solCount} SOL
          </span>
        </div>

        <div
          id="mint_action_run_splitter_bar_wrapper_2"
        >
          <img
            id="mint_action_run_splitter_bar_2"
            src="/img/Solmine/mint/splitter_bar.png"
            alt="mint_action_run_splitter_bar_2"
          />
        </div>

        <div
          id="mint_action_run_unit_bar_wrapper_3"
        >
          <span
            id="mint_action_run_unit_3_1"
          >
            ASTRONAUTS LEFT
          </span>
          <span
            id="mint_action_run_unit_3_2"
          >
            3000
          </span>
        </div>

        <div
          id="mint_action_run_mint_wrapper"
        >
          <img
            id="mint_action_run_mint"
            src="/img/Solmine/mint/mint.png"
            alt="mint_action_run_mint"
            onMouseEnter={onActiveMint}
            onMouseOut={onNormalMint}
        />
        </div>

      </div>
		</div>
	);
};

export default MintActionRun;
