import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

// pages
import Main from "./pages/Main";
import DataPage from "./pages/DataPage";

// css

// imterface

const RelativeContainer = styled.div`
  display: block;
  position: relative;
  height: auto;
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 60px;
  padding-top: 48px;
`;

const App: React.FC = () => {
  return (
    <>
      <RelativeContainer>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/datapage" element={<DataPage />} />
        </Routes>
      </RelativeContainer>
    </>
  );
};

export default App;
