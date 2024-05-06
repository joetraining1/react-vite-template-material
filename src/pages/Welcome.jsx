import React from "react";
import UniversalButton from "../lib/parts/UniversalButton/UniversalButton";
import UtilityModal from "../components/modal/UtilityModal";
import useModalState from "../hooks/useModalState";
import * as Section from "../lib/parts/SectionHeader/SectionHeader";
import TableData from "../components/TableData/TableData";
import { TestRows } from "../lib/constant/DummyData";
import TestColumn from "../lib/table_columns/TestColumn";
import useValueChanges from "../hooks/useValueChanges";
import { TextField } from "@mui/material";
import TopBar from "../components/TopBar/TopBar";

const Welcome = () => {
  //this page is dedicated to facilitate prototypes
  const { setValue, value } = useValueChanges();
  const { TryColumn } = TestColumn(TestRows);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        height: "auto",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <TopBar />
      <Section.SectionContainer>
        {value}
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size="small"
        />
        <Section.default
          title={"Welcome!"}
          value={"This page is dedicated for prototypes."}
        />
        <TableData rows={TestRows} column={TryColumn} />
      </Section.SectionContainer>
    </div>
  );
};

export default Welcome;
