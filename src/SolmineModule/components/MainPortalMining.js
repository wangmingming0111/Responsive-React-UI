import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import SolInput from './SolInput';


import { useLocation } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import { buyEggs, sellEggs, hatchEggs, initialize } from "../../contracts/bean";

import {
  getWalletSolBalance,
  getVaultSolBalance,
  getUserData,
  getGlobalStateData
} from "../../contracts/bean"



const MainPortalMining = (props) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const [approveSOL, setApproveSOL] = useState(0);
  const [depositSOL, setDepositSOL] = useState(0);

  const onActiveApprove = (e) => {
		document.getElementById("main_portal_mining_approve_sol").src = "/img/Solmine/main/approve_sol_1.png";
  };

	const onNormalApprove = (e) => {
		document.getElementById("main_portal_mining_approve_sol").src = "/img/Solmine/main/approve_sol.png";
  };

  const onActiveDeposit = (e) => {
		document.getElementById("main_portal_mining_deposite_sol").src = "/img/Solmine/main/deposite_sol_1.png";
  };

	const onNormalDeposit = (e) => {
		document.getElementById("main_portal_mining_deposite_sol").src = "/img/Solmine/main/deposite_sol.png";
  };

  const onActiveCompound = (e) => {
		document.getElementById("main_portal_mining_compound").src = "/img/Solmine/main/compound_1.png";
  };

	const onNormalCompound = (e) => {
		document.getElementById("main_portal_mining_compound").src = "/img/Solmine/main/compound.png";
  };

  const onActiveClaim = (e) => {
		document.getElementById("main_portal_mining_claim").src = "/img/Solmine/main/claim_80_1.png";
  };

	const onNormalClaim = (e) => {
		document.getElementById("main_portal_mining_claim").src = "/img/Solmine/main/claim_80.png";
  };

  const onActiveAutoCompoundOff = (e) => {
		document.getElementById("main_portal_mining_auto_compound_off").src = "/img/Solmine/main/auto_compound_off_1.png";
  };

	const onNormalAutoCompoundOff = (e) => {
		document.getElementById("main_portal_mining_auto_compound_off").src = "/img/Solmine/main/auto_compound_off.png";
  };

  const onActiveAutoCompoundOn = (e) => {
		document.getElementById("main_portal_mining_auto_compound_on").src = "/img/Solmine/main/auto_compound_on_1.png";
  };

	const onNormalAutoCompoundOn = (e) => {
		document.getElementById("main_portal_mining_auto_compound_on").src = "/img/Solmine/main/auto_compound_on.png";
  };

  const onChangeApproveSol = (value) => {
    setApproveSOL(value);
  }
  const onChangeDepositSol = (value) => {
    setDepositSOL(value);
  }

  const { publicKey: address } = useWallet();
  const [bakeSOL, setBakeSOL] = useState(0);
  const [loading, setLoading] = useState(false);
  // const query = useQuery();
  const wallet = useWallet();

  const [minersCount, setMinersCount] = useState("0");
  // const [beanRewards, setBeanRewards] = useState("0");
  const [walletSolBalance, setWalletSolBalance] = useState("0");
  const [contractSolBalance, setContractSolBalance] = useState("0");
  const [dataUpdate, setDataUpdate] = useState(false);
  const [adminKey, setAdminKey] = useState(null);

  useEffect(() => {
    getWalletSolBalance(wallet).then(bal => {
      console.log("getWalletSolBalance bal=", bal);
      setWalletSolBalance(bal);
    });
    getUserData(wallet).then(data => {
      if (data !== null) {
        console.log('userData =', data);
        setMinersCount(data.miners);
      } else {
        setMinersCount("0");
      }
    });
    getGlobalStateData(wallet).then(data => {
      if (data != null) {
        setAdminKey(data.authority);
      }
    })
  }, [wallet, dataUpdate]);

  useEffect(() => {
    getVaultSolBalance(wallet).then(bal => {
      setContractSolBalance(bal);
    });
  }, [wallet, dataUpdate]);

  useEffect(() => {
    setTimeout(() => {
      if (wallet.publicKey) toggleDataUpdate();
    }, 5000);
  });

  const toggleDataUpdate = () => {
    setDataUpdate(!dataUpdate);
  }

  // const onUpdateBakeSOL = (value) => {
  //   setBakeSOL(value);
  // };
  // const getRef = () => {
  //   const ref = query.get("ref");
  //   return ref;
  // };
  
  const initializeProgram = async () => {
    
    setLoading(true);
    try {
      await initialize(wallet);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
    toggleDataUpdate();
  };

  // const bake = async () => {
  //   setLoading(true);

  //   let ref = getRef();
  //   console.log("bake: ref=", ref);
  //   if (ref === null) ref = wallet.publicKey;
  //   try {
  //     await buyEggs(wallet, ref, bakeSOL);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   setLoading(false);
  //   toggleDataUpdate();
  // };

  // const reBake = async () => {
  //   setLoading(true);

  //   let ref = getRef();

  //   if (ref === null) ref = wallet.publicKey;
  //   try {
  //     await hatchEggs(wallet, ref);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   setLoading(false);
  //   toggleDataUpdate();
    
  // };

  const eatBeans = async () => {
    setLoading(true);

    try {
      await sellEggs(wallet);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
    toggleDataUpdate();
  };


  return (
    <div 
      id="main_portal_mining_container"
    >
      {/* + ---------- title --------- + */}
      <div
        className="main_portal_items_title"
        id="main_portal_mining_title"
      >
        MINING PORTAL
      </div>

      {/* + ---------- grid-1 --------- + */}
      <Grid
        container
        id="main_portal_mining_grid_1"
      >
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_1_title_items"
        >
          YOUR WALLET
        </Grid>
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_1_value_items"
        >
          <div className="main_portal_mining_values">
          {walletSolBalance} SOL
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_1_title_items"
        >
          SOL INVESTED
        </Grid>
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_1_value_items"
        >
          <div
            className="main_portal_mining_values"
          >
            SOL
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_1_title_items"
        >
          MINERS PURCHASED
        </Grid>
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_1_value_items">
          <div className="main_portal_mining_values">
            {minersCount}
          </div>
        </Grid>
      </Grid>

      <div
        id="main_portal_mining_splitter_bar_wrapper_1"
      >
        <img
          id="main_portal_mining_splitter_bar_1"
          src="/img/Solmine/main/splitter_bar.png"
          alt="main_portal_mining_splitter_bar_1"
        />
      </div>

      {/* + ---------- grid-2 --------- + */}
      <Grid
        container
        id="main_portal_mining_grid_2"
      >
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_2_items"
        >
          {/* <div
            className="main_portal_mining_grid_2_value_1"
          >
            SOL
          </div> */}
          <SolInput 
            min={0}
            max={10}
            value={approveSOL.toString()}
            onChange={onChangeApproveSol}
          />
          <div
            className="main_portal_mining_grid_2_value_2"
          >
            <img
              id="main_portal_mining_approve_sol"
              src="/img/Solmine/main/approve_sol.png"
              alt="main_portal_mining_approve_sol"
              onMouseEnter={onActiveApprove}
              onMouseOut={onNormalApprove}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_2_items"
        >
          {/* <div
            className="main_portal_mining_grid_2_value_1"
          >
            SOL
          </div> */}
          <SolInput 
            min={0}
            max={10}
            value={depositSOL.toString()}
            onChange={onChangeDepositSol}
          />
          <div
            className="main_portal_mining_grid_2_value_2"
          >
            <img
              id="main_portal_mining_deposite_sol"
              src="/img/Solmine/main/deposite_sol.png"
              alt="main_portal_mining_deposite_sol"
              onMouseEnter={onActiveDeposit}
              onMouseOut={onNormalDeposit}
            />
          </div>
        </Grid>
      </Grid>

      <div
        id="main_portal_mining_splitter_bar_wrapper_2"
      >
        <img
          id="main_portal_mining_splitter_bar_2"
          src="/img/Solmine/main/splitter_bar.png"
          alt="main_portal_mining_splitter_bar_2"
        />
      </div>

      {/* + ---------- grid-3 --------- + */}
      <Grid
        container
        id="main_portal_mining_grid_3"
      >
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_3_title_items"
        >
          AVAILABLE REWARDS
        </Grid>
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_3_items"
        >
          <div
            className="main_portal_mining_grid_3_value_1"
          >
            SOL
          </div>
          <div
            className="main_portal_mining_grid_3_value_2"
          >
            <img
              id="main_portal_mining_compound"
              src="/img/Solmine/main/compound.png"
              alt="main_portal_mining_compound"
              onMouseEnter={onActiveCompound}
              onMouseOut={onNormalCompound}
            />
          </div>
          <div
            className="main_portal_mining_grid_3_value_3"
          >
            <img
              id="main_portal_mining_claim"
              src="/img/Solmine/main/claim_80.png"
              alt="main_portal_mining_claim"
              onMouseEnter={onActiveClaim}
              onMouseOut={onNormalClaim}
            />
          </div>
        </Grid>
      </Grid>

      {/* + ---------- grid-4 --------- + */}
      <Grid
        container
        id="main_portal_mining_grid_4"
      >
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_4_title_items"
        >
          COMPOUND TIMER
        </Grid>
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_4_items"
        >
          <div
            className="main_portal_mining_grid_4_value_1"
          >
          </div>
        </Grid>
      </Grid>

      {/* + ---------- grid-5 --------- + */}
      <Grid
        container
        id="main_portal_mining_grid_5"
      >
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_5_title_items"
        >
          AUTO COMPOUNDER
        </Grid>
        <Grid item xs={12} sm={6} md={6}
          className="main_portal_mining_grid_5_row_items"
        >
          <div
            className="main_portal_mining_grid_5_row_item_container"
          >
            <div
              className="main_portal_mining_grid_5_row_item_btn"
            >
              <img
                id="main_portal_mining_auto_compound_off"
                src="/img/Solmine/main/auto_compound_off.png"
                alt="main_portal_mining_auto_compound_off"
                onMouseEnter={onActiveAutoCompoundOff}
                onMouseOut={onNormalAutoCompoundOff}
              />
            </div>
            <div
              className="main_portal_mining_grid_5_row_item_txt"
            >
            </div>
          </div>
          <div
            className="main_portal_mining_grid_5_row_item_container"
          >
            <div
              className="main_portal_mining_grid_5_row_item_btn"
            >
              <img
                id="main_portal_mining_auto_compound_on"
                src="/img/Solmine/main/auto_compound_on.png"
                alt="main_portal_mining_auto_compound_on"
                onMouseEnter={onActiveAutoCompoundOn}
                onMouseOut={onNormalAutoCompoundOn}
              />
            </div>
            <div
              className="main_portal_mining_grid_5_row_item_txt"
            >
              5% TAX
            </div>
          </div>
        </Grid>
      </Grid>

    </div>
  );
}

export default MainPortalMining;
