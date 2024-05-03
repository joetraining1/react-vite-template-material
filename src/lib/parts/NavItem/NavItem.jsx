import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { h4FontStyle } from "../../constant/Styles";
import { AllColors } from "../../constant/Colors";

const NavItem = ({ id, path, title }) => {
  const location = useLocation();
  const current = new RegExp(path);
  const test = location.pathname.match(/.*\/(.*)$/);
  return (
    <NavLink
      style={{
        ...h4FontStyle,
        color: AllColors.Purple,
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        borderBottom: test.includes(path)
          ? `3px solid ${AllColors.Purple}`
          : "none",
      }}
      id={id}
      to={path}
      replace={true}
    >
      {title}
    </NavLink>
  );
};

export default NavItem;
