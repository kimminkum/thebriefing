import React from 'react';
import styled from 'styled-components';

import img1 from '../../assets/img/scenario/img1.jpg';

const Wrapper = styled.div`
  padding: calc(24 / 690 * 100%);
  max-width: 690px;
  margin: 0 auto;
  background-color: #fefae0;
  border: 2px solid #d4b28c;
  border-radius: 8px;
  font-family: Pretendard, sans-serif;
`;

const Section = styled.div`
  margin-bottom: calc(40 / 690 * 100%);
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: clamp(18px, calc(24 / 750 * 100vw), 24px);
  margin-bottom: calc(16 / 690 * 100%);
  color: #4e342e;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  font-size: clamp(14px, calc(18 / 750 * 100vw), 18px);
  color: #3e2723;
`;

const Th = styled.th`
  border: 1px solid #a1887f;
  background-color: #f4f4f4;
  padding: calc(12 / 690 * 100%);
  min-width: 30px;
`;

const Td = styled.td`
  border: 1px solid #a1887f;
  padding: calc(12 / 690 * 100%);
  text-align: center;
  vertical-align: top;
`;

const LTd = styled.td`
  border: 1px solid #a1887f;
  padding: calc(12 / 690 * 100%);
  text-align: left;
  vertical-align: top;
  max-width: 300px;
`;

const ScenarioDataSummary: React.FC = () => {
  return (
    <Wrapper>
      <Section>
        <Title>Text Data 요약</Title>
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Text</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>14</Td>
              <LTd>
                데이터의 경우 ?버튼으로 Datapage를 확인해보니 각종 타입에 잘 대응할 수 있도록
                구성했네. 텍스트 부분은 한 라인으로 설명 가능하게 하였고, 컨텐츠 부분의 경우 어떤
                타입을 넣어도 되게끔 만든 뒤에 대응하고 있어.
              </LTd>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section>
        <Title>Content Data 요약</Title>
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Type</Th>
              <Th>Content</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>14</Td>
              <Td>component</Td>
              <Td>ScenarioDataSummary</Td>
            </tr>
            <tr>
              <Td>15</Td>
              <Td>image</Td>
              <Td>
                <img
                  src={img1.src}
                  alt="데이터 페이지 이미지"
                  style={{
                    maxWidth: '100px',
                    height: 'auto',
                    margin: '0 auto',
                  }}
                />
              </Td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </Wrapper>
  );
};

export default ScenarioDataSummary;
