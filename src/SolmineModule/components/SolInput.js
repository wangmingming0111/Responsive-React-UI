import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function SolInput(props) {

  SolInput.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
	};	

	SolInput.defaultProps = {
    min: 0,
    max: 1,
    value: "0",
		onChange: null,
	};

  return (
    <Box 
      id="wrapperbox_in_sol_input"
      position="relative"
    >
      <input
        type="number"
        id="inputbox_in_sol_input"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <Typography
        id="sol_unit_label_in_sol_input"
      >
        SOL
      </Typography>
    </Box>
  );
}
