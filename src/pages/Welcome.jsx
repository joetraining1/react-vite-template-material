import React from "react";
import UniversalButton from "../lib/parts/UniversalButton/UniversalButton";
import UtilityModal from "../components/modal/UtilityModal";
import useModalState from "../hooks/useModalState";
import * as Section from "../lib/parts/SectionHeader/SectionHeader";
import TableData from "../components/TableData/TableData";
import { TestRows } from "../lib/constant/DummyData";
import TestColumn from "../lib/table_columns/TestColumn";
("../lib/table_columns/TestColumn");

const Welcome = () => {
  //this page is dedicated to facilitate prototypes

  const { MountModal, UnMountModal, modalState } = useModalState();
  const { TryColumn } = TestColumn();

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
      <Section.SectionContainer>
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
