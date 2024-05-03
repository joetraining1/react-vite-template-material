import React from "react";
import { AllSize } from "../../lib/constant/Styles";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const TableData = ({ column, rows, loading }) => {
  if (column && rows) {
    return (
      <div
        style={{
          display: "flex",
          placeItems: "center",
          ...AllSize,
          minHeight: "20vh",
        }}
      >
        <DataGrid
          sx={{
            width: "100%",
            backgroundColor: "transparent",
            padding: "1vw",
            height: "100%",
          }}
          autoHeight={true}
          rows={rows}
          columns={column}
          loading={loading}
          pageSizeOptions={[10, 25, 50, 100]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
        />
      </div>
    );
  }
  return <Typography>Data tidak ada</Typography>;
};

export default TableData;
