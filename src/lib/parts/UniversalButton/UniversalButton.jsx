import { Button } from "@mui/material";
import React from "react";
import { BasicButtonStyle } from "../../constant/Styles";

const UniversalButton = ({ title, icon, styles, action }) => {
  const def = () => {
    return console.log("Please Add Some Function for this button.");
  };
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        ...styles,
        ...BasicButtonStyle,
        color: "#fff",
      }}
      onClick={action ? () => action() : () => def()}
    >
      {icon}
      {title}
    </Button>
  );
};

export default UniversalButton;
