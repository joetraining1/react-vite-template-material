import { useMemo } from "react";
import * as Section from "../parts/SectionHeader/SectionHeader";
import UniversalButton from "../parts/UniversalButton/UniversalButton";
import UtilityModal from "../../components/modal/UtilityModal";

import React from "react";
import useModalState from "../../hooks/useModalState";
import IndexModal from "../../components/modal/IndexModal";

const TestColumn = () => {
  const { MountModal, UnMountModal, modalState } = useModalState();

  const TryColumn = useMemo(() => {
    return [
      {
        field: "id",
        headerName: "No.",
        filterable: false,
        width: 50,
        renderCell: (params) =>
          `${params.api.getRowIndexRelativeToVisibleRows(params.row.id) + 1}.`,
      },
      {
        field: "title",
        headerName: "Data Title",
        width: 150,
      },
      {
        field: "value",
        headerName: "Data Value",
        width: 250,
      },
      {
        field: "option",
        headerName: "Option",
        width: 150,
        renderCell: ({ row: { id, title, value } }) => {
          return (
            <IndexModal
              button={"option"}
              title={"Test Table Modal"}
              value={"modal opened"}
            >
              {title}
            </IndexModal>
          );
        },
      },
    ];
  }, []);
  return {
    TryColumn,
  };
};

export default TestColumn;
