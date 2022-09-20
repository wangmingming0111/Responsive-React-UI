import { useState } from "react";
import Grid from "@mui/material/Grid";

import SolInput from './SolInput';

const MainPortalOperations = (props) => {

  const [withdrawSOL, setWithdrawSOL] = useState(0);

  const onActiveMint = (e) => {
		document.getElementById("main_portal_operations_mint").src = "/img/Solmine/main/mint_1.png";
  };

	const onNormalMint = (e) => {
		document.getElementById("main_portal_operations_mint").src = "/img/Solmine/main/mint.png";
  };

  const onActiveApprove = (e) => {
		document.getElementById("main_portal_operations_approve").src = "/img/Solmine/main/approve_1.png";
  };

	const onNormalApprove = (e) => {
		document.getElementById("main_portal_operations_approve").src = "/img/Solmine/main/approve.png";
  };

  const onActiveStake = (e) => {
		document.getElementById("main_portal_operations_stake").src = "/img/Solmine/main/stake_1.png";
  };

	const onNormalStake = (e) => {
		document.getElementById("main_portal_operations_stake").src = "/img/Solmine/main/stake.png";
  };

  const onActiveUnstake = (e) => {
		document.getElementById("main_portal_operations_unstake").src = "/img/Solmine/main/unstake_1.png";
  };

	const onNormalUnstake = (e) => {
		document.getElementById("main_portal_operations_unstake").src = "/img/Solmine/main/unstake.png";
  };

  const onActiveWithdraw = (e) => {
		document.getElementById("main_portal_operations_withdraw_sol").src = "/img/Solmine/main/withdraw_sol_1.png";
  };

	const onNormalWithdraw = (e) => {
		document.getElementById("main_portal_operations_withdraw_sol").src = "/img/Solmine/main/withdraw_sol.png";
  };

  const onChangeWithdrawSol = (value) => {
    setWithdrawSOL(value);
  }

  return (
    <div 
      id="main_portal_operations_container"
    >
      <div
        className="main_portal_items_title"
        id="main_portal_operations_title"
      >
        OPERATIONS PORTAL
      </div>

      {/* + ---------- grid-1 --------- + */}
      <Grid
        container
        id="main_portal_operations_grid_1"
      >
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_operations_grid_1_title_items"
        >
          TOTAL DAILY APY
        </Grid>
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_operations_grid_1_value_items"
        >
          <div
            id="main_portal_operations_total_daily_apy"
          >
            %
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_operations_grid_1_title_items"
        >
          CREW MEMBERS
        </Grid>
        <Grid item sm={1} md={1}
        >
        </Grid>
        <Grid item xs={12} sm={4} md={4}
          className="main_portal_operations_grid_1_value_items"
        >
          <div
            id="main_portal_operations_crew_members"
          >
          </div>
        </Grid>
        <Grid item sm={1} md={1}
        >
        </Grid>
        <Grid item xs={12} sm={6} md={6}
        >
          <div
            id="main_portal_operations_grid_1_mint"
          >
            <img
              id="main_portal_operations_mint"
              src="/img/Solmine/main/mint.png"
              alt="main_portal_operations_mint"
              onMouseEnter={onActiveMint}
              onMouseOut={onNormalMint}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}
        >
          <div
            id="main_portal_operations_stake_container"
          >
            <div
              id="main_portal_operations_grid_1_stake_button_group"
            >
              <div
                id="main_portal_operations_grid_1_stake"
              >
                <img
                  id="main_portal_operations_stake"
                  src="/img/Solmine/main/stake.png"
                  alt="main_portal_operations_stake"
                  onMouseEnter={onActiveStake}
                  onMouseOut={onNormalStake}
                />
              </div>
              <div
                id="main_portal_operations_grid_1_unstake"
              >
                <img
                  id="main_portal_operations_unstake"
                  src="/img/Solmine/main/unstake.png"
                  alt="main_portal_operations_unstake"
                  onMouseEnter={onActiveUnstake}
                  onMouseOut={onNormalUnstake}
                />
              </div>
            </div>
            <div
              id="main_portal_operations_grid_1_approve"
            >
              <img
                id="main_portal_operations_approve"
                src="/img/Solmine/main/approve.png"
                alt="main_portal_operations_approve"
                onMouseEnter={onActiveApprove}
                onMouseOut={onNormalApprove}
              />
            </div>
          </div>
        </Grid>
      </Grid>

      <div
        id="main_portal_operations_splitter_bar_wrapper_1"
      >
        <img
          id="main_portal_operations_splitter_bar_1"
          src="/img/Solmine/main/splitter_bar.png"
          alt="main_portal_operations_splitter_bar_1"
        />
      </div>

      {/* + ---------- grid-2 --------- + */}
      <Grid
        container
        id="main_portal_operations_grid_2"
      >
        <Grid item xs={12} sm={6} md={6}
          id="main_portal_operations_withdraw_title_group"
        >
          <div
            id="main_portal_operations_withdraw_title_1"
          >
            FORCED WITHDRAW
          </div>
          <div
            id="main_portal_operations_withdraw_title_2"
          >
            (INITIAL INVESTMENT)
          </div>
          <div
            id="main_portal_operations_withdraw_title_3"
          >
            50% TAX
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_operations_grid_2_items"
        >
          {/* <div
            className="main_portal_operations_grid_2_value_1"
          >
            SOL
          </div> */}
          <SolInput 
            min={0}
            max={10}
            value={withdrawSOL.toString()}
            onChange={onChangeWithdrawSol}
          />
          <div
            className="main_portal_operations_grid_2_value_2"
          >
            <img
              id="main_portal_operations_withdraw_sol"
              src="/img/Solmine/main/withdraw_sol.png"
              alt="main_portal_operations_withdraw_sol"
              onMouseEnter={onActiveWithdraw}
              onMouseOut={onNormalWithdraw}
            />
          </div>
        </Grid>
      </Grid>

      <div
        id="main_portal_operations_splitter_bar_wrapper_2"
      >
        <img
          id="main_portal_operations_splitter_bar_2"
          src="/img/Solmine/main/splitter_bar.png"
          alt="main_portal_operations_splitter_bar_2"
        />
      </div>

    </div>
  );
}

export default MainPortalOperations;
