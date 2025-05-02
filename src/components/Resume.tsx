import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: calc(32 / 750 * 100%) calc(16 / 750 * 100%);

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    background-color: #000;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const File = styled.table`
  background-color: #fff;
  position: relative;
  color: #000;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Tr = styled.tr``;

const Th = styled.th`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: calc(12 / 768 * 100%) calc(8 / 768 * 100%);
  text-align: left;
`;

const Td = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.8rem 0.5rem;
`;

const Resume: React.FC = () => {
  return (
    <Container>
      <File>
        <Table>
          <tbody>
            <Tr>
              <Td rowSpan={2}>
                <img src="profile.jpg" alt="지원자 사진" width="100" />
              </Td>
              <Th>이름</Th>
              <Td>김민겸</Td>
            </Tr>
            <Tr>
              <Th>생년월일</Th>
              <Td>1994 07 19</Td>
            </Tr>
            <Tr>
              <Th>이메일</Th>
              <Td>h24breaker@gmail.com</Td>
            </Tr>
            <Tr>
              <Th>휴대폰</Th>
              <Td>010-9567-3391</Td>
            </Tr>
          </tbody>
        </Table>
      </File>
    </Container>
  );
};

export default Resume;
