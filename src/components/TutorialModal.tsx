// src/components/Tutorial/TutorialModal.tsx
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 480px;
  background: ${({ theme }) => theme.textBg};
  color: ${({ theme }) => theme.textTxt};
  padding: 20px;
  border-radius: 10px;
`;

const CloseBtn = styled.button`
  margin-top: 20px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

interface Props {
  onClose: () => void;
}

const TutorialModal: React.FC<Props> = ({ onClose }) => {
  return (
    <Overlay>
      <ModalBox>
        <Swiper spaceBetween={10}>
          <SwiperSlide>
            <h2>📄 자기소개서 인터랙션</h2>
            <p>클릭하면 서류가 넘어가고 텍스트가 타이핑됩니다.</p>
          </SwiperSlide>
          <SwiperSlide>
            <h2>💬 효과음과 타이핑 속도</h2>
            <p>우측 상단 '?' 버튼을 눌러 도움말과 설정에 접근하세요.</p>
          </SwiperSlide>
          <SwiperSlide>
            <h2>🎨 다크모드 & UI 토글</h2>
            <p>도움말에서 테마 전환과 타이핑 속도를 조절할 수 있어요.</p>
          </SwiperSlide>
        </Swiper>
        <CloseBtn onClick={onClose}>튜토리얼 닫기</CloseBtn>
      </ModalBox>
    </Overlay>
  );
};

export default TutorialModal;
