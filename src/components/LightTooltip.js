import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
  },
}));

function LightTooltip(props) {
  return (
    <CustomTooltip
      className="custom-tooltip"
      {...props}
      sx={{
        "& .MuiTooltip-tooltip p": {
          fontSize: "1rem",
        },
      }}
    ></CustomTooltip>
  );
}

export default LightTooltip;
