import React, { useState } from "react";

const useValueChanges = () => {
  const [value, setValue] = useState("");
  return { value, setValue };
};

export default useValueChanges;
