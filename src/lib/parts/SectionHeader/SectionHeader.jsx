import React from "react";
import { BoxStyle, h4FontStyle } from "../../constant/Styles";
import { AllColors } from "../../constant/Colors";
import { Box, Typography } from "@mui/material";

const SectionHeader = ({ styles, title, value }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        ...styles,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          ...h4FontStyle,
          color: AllColors.GreyScale,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: h4FontStyle.fontFamily,
          fontWeight: "400",
          color: AllColors.GreyDoff,
        }}
      >
        {value}
      </Typography>
    </div>
  );
};

export default SectionHeader;

export const SectionContainer = ({ children }) => {
  return <Box sx={BoxStyle}>{children}</Box>;
};
