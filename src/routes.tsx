import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "src/containers/layout";
import { MainPage } from "src/pages";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<div style={{ padding: 20 }}>not found</div>} />
      </Route>
      <Route path="*" element={<div style={{ padding: 20 }}>not found</div>} />
    </Routes>
  );
};

export default Routers;
