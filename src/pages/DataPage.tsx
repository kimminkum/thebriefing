import React from "react";
import styled from "styled-components";
import { textData } from "../data/textData";
import { contentData } from "../data/contentData";
import useIntersectionObserver from "../styles/useIntersectionObserver";

// api 같은거 쓰기

const Container = styled.div`
  padding: 20px;
  max-width: 750px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f4f4f4;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

const DataPage: React.FC = () => {
  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%"
  });

  return (
    <Container>
      <h2>데이터 테이블</h2>

      {/* Text Data Table */}
      <h3>Text Data</h3>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Text</Th>
          </tr>
        </thead>
        <tbody>
          {textData.map((item) => (
            <tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.text}</Td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Content Data Table */}
      <h3>Content Data</h3>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Type</Th>
            <Th>Content</Th>
          </tr>
        </thead>
        <tbody>
          {contentData.map((item) => (
            <tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.type}</Td>
              <Td>
                {item.type === "image" ? (
                  <img src={item.src} alt="preview" width="50" />
                ) : (
                  "component : " +
                  ((item.component as React.FC)?.name || "Unknown")
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DataPage;
