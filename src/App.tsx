import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

// pages
import Main from "./pages/Main";
import DataPage from "./pages/DataPage";
import ErrorPage from "./pages/ErrorPage";

// css

// imterface

const RelativeContainer = styled.div`
  display: block;
  position: relative;
  height: auto;
  width: 100%;
  overflow-x: hidden;
`;

const App: React.FC = () => {
  return (
    <>
      <RelativeContainer>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/datapage" element={<DataPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </RelativeContainer>
    </>
  );
};

export default App;
