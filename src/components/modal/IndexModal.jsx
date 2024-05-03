import React from "react";
import UniversalButton from "../../lib/parts/UniversalButton/UniversalButton";
import UtilityModal from "./UtilityModal";
import useModalState from "../../hooks/useModalState";

const IndexModal = ({ button, title, value, children, data }) => {
  const { MountModal, UnMountModal, modalState } = useModalState();
  return (
    <React.Fragment>
      <UniversalButton title={button} action={() => MountModal()} />
      <UtilityModal
        action={() => UnMountModal()}
        title={title}
        value={value}
        state={modalState}
      >
        {children}
      </UtilityModal>
    </React.Fragment>
  );
};

export default IndexModal;
