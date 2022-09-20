import Grid from "@mui/material/Grid";

import MintActionDesc from './MintActionDesc';
import MintActionRun from './MintActionRun';

const MintAction = (props) => {
  
  return (
    <Grid 
      container 
      id="mint_action_container"
    >
      <Grid item xs={12} sm={6} md={6}
        id="mint_action_grid_desc"
      >
        <MintActionDesc />
      </Grid>
      <Grid item xs={12} sm={5} md={5}
        id="mint_action_grid_run"
      >
        <MintActionRun />
      </Grid>
    </Grid>
  );
}

export default MintAction;
