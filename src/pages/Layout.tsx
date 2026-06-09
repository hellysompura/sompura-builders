import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Founders from "./Founders";
import Footer from "./Footer";

export default function Layout() {
  return (
    <React.Fragment>
      <Header />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/founders" element={<Founders />} />
      </Routes>
      
      <Footer />
    </React.Fragment>
  );
}
