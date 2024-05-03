import React, { useState } from "react";

const useModalState = () => {
  const [modalState, setModalState] = useState(false);

  const MountModal = () => {
    return setModalState(true);
  };

  const UnMountModal = () => {
    return setModalState(false);
  };
  return { modalState, MountModal, UnMountModal };
};

export default useModalState;
