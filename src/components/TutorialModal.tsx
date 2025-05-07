// src/components/TutorialModal.tsx
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"; // 타입 임포트

import "swiper/css";
import "swiper/css/pagination";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 375px;
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 520px;
  background: #fdfdfd;
  color: #111;
  padding: 2.4rem 1.6rem;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
`;

const SlideCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 1.5rem;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TutoTitle = styled.h2`
  margin-bottom: calc(30 / 480 * 100%);
  font-weight: 600;
  color: #333;
`;

const TutoTxt = styled.p`
  color: #444;
  white-space: pre-line;
  position: relative;
  padding-left: calc(12 / 480 * 100%);
  margin-bottom: calc(10 / 480 * 100%);

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #aaa;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: calc(30 / 480 * 100%);
  gap: calc(30 / 480 * 100%);
`;

const NavBtn = styled.button`
  background: #333;
  color: #fff;
  border: none;
  padding: calc(16 / 480 * 100%) calc(32 / 480 * 100%);
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #555;
  }
`;

const CloseBtn = styled.button`
  margin-top: calc(32 / 480 * 100%);
  background: transparent;
  border: 2px solid #333;
  color: #333;
  padding: calc(14 / 480 * 100%) calc(30 / 480 * 100%);
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f1f1f1;
  }
`;

interface Props {
  onClose: () => void;
}

const TutorialModal: React.FC<Props> = ({ onClose }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <Overlay>
      <ModalBox className="font-20" ref={modalRef}>
        <Swiper
          spaceBetween={100}
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
            <SlideCard>
              <TutoTitle className="font-24">🖱️ 인터랙션 안내</TutoTitle>
              <TutoTxt className="font-20">
                간단하게 진행 방식을 설명드리겠습니다.
              </TutoTxt>
              <TutoTxt className="font-20">
                클릭하면 서류가 넘어가고 텍스트가 타이핑됩니다.
              </TutoTxt>
              <TutoTxt className="font-20">
                저의 기본적인 자기소개서를 스토리 형식으로 만들었습니다.
              </TutoTxt>
              <TutoTxt className="font-20">잘 봐주시면 감사하겠습니다!</TutoTxt>
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <TutoTitle className="font-24">⚙️ ? 버튼</TutoTitle>
              <TutoTxt className="font-20">텍스트의 진행 속도조절,</TutoTxt>
              <TutoTxt className="font-20">
                데이터를 이용한 방식을 보여주기 위해 사용한 코드를 페이지 링크를
                넣었습니다.
              </TutoTxt>
              <TutoTxt className="font-20">
                해당 튜토리얼은 다시 ?버튼안의 내용을 통해 확인하실 수 있습니다.
              </TutoTxt>
              {/* 추가시 넣기 */}
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <TutoTitle className="font-24">📝 설명에 대하여</TutoTitle>
              <TutoTxt className="font-20">
                어떤 의도를 갖고 만들었는지와 자기소개서를 적었습니다.
              </TutoTxt>
              <TutoTxt className="font-20">
                다시 한 번 잘 부탁드리겠습니다.
              </TutoTxt>
            </SlideCard>
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
