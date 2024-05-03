import { Button, Modal, Paper } from "@mui/material";
import React from "react";
import SectionHeader from "../../lib/parts/SectionHeader/SectionHeader";
import { CancelPresentationRounded } from "@mui/icons-material";

const UtilityModal = ({ title, value, state, action, children }) => {
  if (state) {
    return (
      <Modal open={state} onClose={() => action()}>
        <Paper
          sx={{
            height: "fit-content",
            width: "fit-content",
            minHeight: "20svh",
            minWidth: "20vw",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            position: "absolute",
            padding: "2vw",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              height: "100%",
              alignItems: "start",
            }}
          >
            <SectionHeader
              title={title}
              value={value}
              styles={{
                alignItems: "start",
              }}
            />
            <Button
              sx={{
                color: "red",
                borderColor: "red",
                width: "50px",
              }}
              onClick={() => action()}
            >
              <CancelPresentationRounded />
            </Button>
          </div>
          {children}
        </Paper>
      </Modal>
    );
  }
  return null;
};

export default UtilityModal;
