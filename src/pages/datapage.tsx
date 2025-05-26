import React from "react";
import styled from "styled-components";
import { scenarioData } from "../data/scenarioData";
import useIntersectionObserver from "../styles/useIntersectionObserver";
import { useRouter } from "next/router";
import Image from "next/image";

// api 같은거 쓰기

const Container = styled.div`
  max-width: 750px;
  min-width: 375px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  padding: calc(160 / 750 * 100%) calc(40 / 750 * 100%) calc(60 / 750 * 100%);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: calc(40 / 750 * 100%);
  margin-bottom: calc(80 / 750 * 100%);
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: calc(20 / 750 * 100%);
  background-color: #f4f4f4;
`;

//  재 푸쉬

const Td = styled.td`
  border: 1px solid #ddd;
  padding: calc(20 / 750 * 100%) calc(10 / 750 * 100vw);
  min-width: 60px;
  text-align: center;
  vertical-align: middle;

  + .txtleft {
    text-align: left;
  }

  + .txttype {
    min-width: 100px;
  }
`;

const BackButton = styled.button`
  position: fixed;
  top: 20px;
  left: 54%;
  transform: translateX(-375px); // 750px의 절반
  width: 40px;
  height: 40px;
  background: #fdfaf5;
  border: 2px dashed #79ace6;
  border-radius: 50%;
  font-weight: bold;
  color: #333;
  z-index: 10;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background 0.2s ease;

  &:hover {
    background: #79ace6;
  }

  @media (max-width: 750px) {
    transform: translateX(-50%);
    left: 40px;
  }
`;

const DataPage: React.FC = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/"); // 예: 메인 페이지로 이동
  };

  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%"
  });

  return (
    <Container>
      <BackButton onClick={() => router.push("/")}>←</BackButton>
      <Wrapper className="font-16">
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
            {scenarioData.map((item) => (
              <tr key={item.id}>
                <Td>{item.id}</Td>
                <Td className="txtleft">{item.text}</Td>
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
            {scenarioData.map((item) => (
              <tr key={item.id}>
                <Td>{item.id}</Td>
                <Td className="txttype">{item.content?.type || "없음"}</Td>
                <Td className="txtleft">
                  {item.content?.type === "image" ? (
                    <img
                      src={item.content?.src?.src}
                      alt={item.content?.alt || ""}
                    />
                  ) : item.content?.type === "component" ? (
                    "component: " +
                    ((item.content.component as React.FC)?.name || "Unknown")
                  ) : (
                    "none"
                  )}
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Wrapper>
    </Container>
  );
};

export default DataPage;

export async function getStaticProps() {
  return { props: {} };
}
