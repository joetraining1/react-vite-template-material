import { AppBar } from "@mui/material";
import React from "react";
import { AllColors } from "../../lib/constant/Colors";
import MassWidth from "../../lib/parts/MassWidth/MassWidth";
import LeftTopBar from "../../lib/parts/LeftTopBar/LeftTopBar";

const TopBar = () => {
  return (
    <AppBar
      sx={{
        height: "6vh",
        width: "100%",
        backgroundColor: AllColors.GreenDoff,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MassWidth
        styles={{
          gap: "1vw",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LeftTopBar />
      </MassWidth>
    </AppBar>
  );
};

export default TopBar;
