import React from "react";

const MassWidth = ({ children, styles }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "1280px",
        height: "auto",
        ...styles,
      }}
    >
      {children}
    </div>
  );
};

export default MassWidth;
