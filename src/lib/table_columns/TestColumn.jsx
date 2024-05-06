import { useMemo } from "react";
import React from "react";
import IndexModal from "../../components/modal/IndexModal";

const TestColumn = (data) => {
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
  }, [data]);

  return {
    TryColumn,
  };
};

export default TestColumn;
