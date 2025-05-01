// src/components/TutorialModal.tsx
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"; // 타입 임포트

import "swiper/css";
import "swiper/css/pagination";

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
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const CloseBtn = styled.button`
  margin-top: 20px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;

const NavBtn = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  margin: 0 6px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TutoTitle = styled.h2`
  margin-bottom: calc(20 / 480 * 100%);
`;

const TutoTxt = styled.p`
  margin-bottom: calc(40 / 480 * 100%);
`;

const FlexBox = styled.div`
  display: flex;
`;

interface Props {
  onClose: () => void;
}

const TutorialModal: React.FC<Props> = ({ onClose }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <Overlay>
      <ModalBox>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ type: "fraction" }}
          modules={[Pagination]}
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper: SwiperType) =>
            setActiveIndex(swiper.activeIndex)
          }
        >
          <SwiperSlide>
            <TutoTitle>📄 인터랙션 안내</TutoTitle>
            <TutoTxt>클릭하면 서류가 넘어가고 텍스트가 타이핑됩니다.</TutoTxt>
          </SwiperSlide>
          <SwiperSlide>
            <TutoTitle>🎵 효과음 & 타이핑</TutoTitle>
            <TutoTxt>텍스트마다 타이핑 효과와 효과음이 재생됩니다.</TutoTxt>
          </SwiperSlide>
          <SwiperSlide>
            <TutoTitle>💡 도움말 보기</TutoTitle>
            <TutoTxt>
              '?' 버튼을 눌러 언제든 도움말을 다시 확인할 수 있어요.
            </TutoTxt>
          </SwiperSlide>
        </Swiper>

        <FlexBox style={{ marginTop: "20px" }}>
          {activeIndex > 0 && <NavBtn onClick={handlePrev}>← 이전</NavBtn>}
          {activeIndex < 2 && <NavBtn onClick={handleNext}>다음 →</NavBtn>}
        </FlexBox>
        <CloseBtn onClick={onClose}>닫기</CloseBtn>
      </ModalBox>
    </Overlay>
  );
};

export default TutorialModal;
