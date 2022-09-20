import Grid from "@mui/material/Grid";
import MainPortalMining from '../components/MainPortalMining';
import MainPortalOperations from '../components/MainPortalOperations';

const MainPortal = (props) => {
  
  return (
    <Grid 
      container 
      justifyContent="center" 
      spacing={2} 
      marginTop={2}
      id="main_portal_container"
    >
      <Grid item
        id="main_portal_grid_mining"
      >
        <MainPortalMining />
      </Grid>
      <Grid item
        id="main_portal_grid_operations"
      >
        <MainPortalOperations />
      </Grid>
    </Grid>
  );
}

export default MainPortal;
