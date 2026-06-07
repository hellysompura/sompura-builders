import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./home/Header";
import Home from "./Home";
import Founders from "./Founders";

export default function Layout() {
  return (
    <React.Fragment>
      <Header />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/founders" element={<Founders />} />
      </Routes>
    </React.Fragment>
  );
}
