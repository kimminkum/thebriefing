import React from "react";
import styled from "styled-components";
import my_picture from "@assets/img/my_picture.jpg";
import Image from "next/image";

const OuterContainer = styled.div`
  width: 100%;
  height: 98vh;
  background-color: #fff;
  display: flex;
  overflow: hidden;
`;

const ResumeBox = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: calc(30 / 690 * 100%) 0;
  min-width: 80%;

  display: flex;
  flex-direction: column;
  gap: calc(30 / 690 * 100%);

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
    gap: calc(50 / 690 * 100%);
  }
`;

const ImgBox = styled.div`
  flex-shrink: 0;
  width: 120px;
  margin-bottom: calc(30 / 690 * 100%);

  img {
    width: 100%;
    border-radius: 8px;
  }

  @media (min-width: 600px) {
    width: 150px;
  }
`;

const InfoBox = styled.div`
  flex: 1;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: #333;

  @media (min-width: 600px) {
    margin-top: 40px;
  }
`;

const Tr = styled.tr`
  margin-bottom: calc(20 / 690 * 100%);
  display: flex;
`;

const Th = styled.th`
  text-align: left;
  font-weight: bold;
  width: 100px;
`;

const Td = styled.td`
  flex: 1;
`;

const FakeTextShadow = styled.div`
  margin-top: 10px;
  height: 70vh;
  min-width: 80%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "• 프로젝트: 더 브리핑과 이전 것들 \\A • 기술: 여러가지 이것저것 노력하자 \\A •성장 :더 성장하기 위해 노력하자.\\A • 과정: 최선을 다해서 하자. \\A •기타 활동 : 기타는 치지 않지. \\A • 문제 해결 능력 : 어디가 문제인지 파악하는 것을 우선으로. 시간이 급하다면 최대한 문제 없게끔. \\A \\A \\A 우리집에서 키우는 고양이는 레오입니다. \\A \\A 주소 https://www.google.com/search?q=mo+%EC%B5%9C%EB%8C%80+%EB%84%88%EB%B9%84&rlz=1C1GCEA_enKR1146KR1146&oq=mo+%EC%B5%9C%EB%8C%80+%EB%84%88%EB%B9%84&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBCDI4NDdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #000;
    opacity: 0.9; /* 더 뚜렷하게 */
    filter: blur(5px); /* 조금만 흐리게 */
    white-space: pre-line; /* 줄바꿈 인식 */
  }
`;

const Resume: React.FC = () => {
  return (
    <OuterContainer>
      <div>
        <ResumeBox>
          <ImgBox>
            <Image src={my_picture} alt="지원자 사진" />
          </ImgBox>
          <InfoBox>
            <Table className="font-18">
              <tbody>
                <Tr>
                  <Th>이름</Th>
                  <Td>김민겸</Td>
                </Tr>
                <Tr>
                  <Th>이메일</Th>
                  <Td>h24breaker@gmail.com</Td>
                </Tr>
                <Tr>
                  <Th>휴대폰</Th>
                  <Td>010-9567-3391</Td>
                </Tr>
                <Tr>
                  <Th>경력</Th>
                  <Td>1년차</Td>
                </Tr>
              </tbody>
            </Table>
          </InfoBox>
        </ResumeBox>

        <FakeTextShadow className="font-18"></FakeTextShadow>
      </div>
    </OuterContainer>
  );
};

export default Resume;
