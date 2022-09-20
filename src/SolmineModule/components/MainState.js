import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { buyEggs, sellEggs, hatchEggs, initialize } from "../../contracts/bean";

import {
  getWalletSolBalance,
  getVaultSolBalance,
  getUserData,
  getGlobalStateData
} from "../../contracts/bean"

const MainState = (props) => {
  const { publicKey: address } = useWallet();

  const wallet = useWallet();
  const [dataUpdate, setDataUpdate] = useState(false);
  const [beanRewards, setBeanRewards] = useState("0");

  useEffect(() => {
    getUserData(wallet).then(data => {
      if (data !== null) {
        console.log('userData =', data);
        setBeanRewards(data.beanRewards);
      } else {
        setBeanRewards("0");
      }
    });
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

  const [contractSolBalance, setContractSolBalance] = useState("0");

  return (
    <Grid 
      container 
      justifyContent="center" 
      direction="row"
      spacing={2} 
      marginTop={2}
      id="main_state_container"
    >
      <Grid item
        className="main_state_grid_items"
        id="main_state_current_tvl"
      >
        <div
          className="main_state_grid_items_title"
          id="main_state_current_tvl_title"
        >
          CURRENT TVL
        </div>
        <div
          className="main_state_grid_items_value"
          id="main_state_current_tvl_value"
        >
          {contractSolBalance} SOL
        </div>
      </Grid>
      <Grid item
        className="main_state_grid_items"
        id="main_state_rewards_pait"
      >
        <div
          className="main_state_grid_items_title"
          id="main_state_rewards_pait_title"
        >
          REWARDS PAID
        </div>
        <div
          className="main_state_grid_items_value"
          id="main_state_rewards_pait_value"
        >
         {beanRewards} SOL
        </div>
      </Grid>
      <Grid item
        className="main_state_grid_items"
        id="main_state_total_users"
      >
        <div
          className="main_state_grid_items_title"
          id="main_state_total_users_title"
        >
          TOTAL USERS
        </div>
        <div
          className="main_state_grid_items_value"
          id="main_state_total_users_value"
        >
          2
        </div>
      </Grid>
    </Grid>
  );
}

export default MainState;
