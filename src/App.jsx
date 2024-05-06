import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dummy from "./pages/Dummy";
import { Routing } from "./lib/constant/Routes";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Welcome />} />
        {Routing.map((item, index) => {
          return (
            <Route
              path={item.path}
              key={item.id}
              element={<item.component />}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
