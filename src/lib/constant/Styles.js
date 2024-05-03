import { AllColors } from "./Colors";

export const h4FontStyle = {
  fontFamily: "Plus Jakarta Sans, sans-serif",
  fontWeight: "600",
};

export const BasicButtonStyle = {
  backgroundColor: AllColors.Purple,
  fontFamily: h4FontStyle.fontFamily,
  fontWeight: "700",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: AllColors.Purple,
  },
};

export const BoxStyle = {
  display: "flex",
  height: "100%",
  width: "100%",
  padding: "2vw",
  backgroundColor: "#fff",
  borderRadius: "5px",
  gap: "1vw",
  flexDirection: "column",
};

export const AllSize = {
  width: "100%",
  height: "100%",
};
