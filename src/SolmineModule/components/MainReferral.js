import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const MainReferral = (props) => {

  const onActiveCompound = (e) => {
		document.getElementById("main_referral_compound").src = "/img/Solmine/main/compound_1.png";
  };

	const onNormalCompound = (e) => {
		document.getElementById("main_referral_compound").src = "/img/Solmine/main/compound.png";
  };

  return (
    <Grid 
      container 
      justifyContent="center" 
      direction="row"
      spacing={2} 
      marginTop={2}
      id="main_referral_container"
    >
      <Grid item
        id="main_referral_rewards_container"
      >
        <Grid
          container
          id="main_referral_rewards"
        >
          <Grid item xs={12} sm={7} md={7}
            id="main_referral_rewards_title_items"
          >
            REFERRAL REWARDS
          </Grid>
          <Grid item xs={12} sm={5} md={5}
            id="main_referral_rewards_value_items"
          >
            <div
              id="main_referral_rewards_value"
            >
              SOL
            </div>
          </Grid>
          <Grid item xs={12} sm={7} md={7}
            id="main_referral_compound_title_group"
          >
            <div
              id="main_referral_compound_title_1"
            >
              3% REFERRAL
            </div>
            <div
              id="main_referral_compound_title_2"
            >
              1% REFERRAL
            </div>
          </Grid>
          <Grid item xs={12} sm={5} md={5}
            id="main_referral_compound_value_items"
          >
            <div
              id="main_referral_compound_value"
            >
              <img
                id="main_referral_compound"
                src="/img/Solmine/main/compound.png"
                alt="main_referral_compound"
                onMouseEnter={onActiveCompound}
                onMouseOut={onNormalCompound}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item
        id="main_referral_link_container"
      >
        <div
          id="main_referral_link_title"
        >
          REFERRAL LINK
        </div>
        <div
          id="main_referral_link_value"
        >
        </div>
        <div
          id="main_referral_link_hint"
        >
          (CLICK TO COPY)
        </div>
      </Grid>
    </Grid>
  );
}

export default MainReferral;
