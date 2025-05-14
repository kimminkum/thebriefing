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
`;

const Inner = styled.div`
  width: 100%;
  min-width: 375px;
  max-width: 750px;
  position: relative;
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 540px;
  margin: 0 auto;
  background: #fdfdfd;
  color: #111;
  padding: calc(60 / 750 * 100%) calc(40 / 750 * 100%) !important;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
`;

const SlideCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TutoTitle = styled.h2`
  margin-bottom: calc(30 / 458 * 100%);
  font-weight: 600;
  color: #333;
`;

const TutoTxt = styled.p`
  color: #444;
  white-space: pre-line;
  position: relative;
  padding-left: calc(12 / 458 * 100%);
  margin-bottom: calc(10 / 458 * 100%);

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
  margin-top: calc(30 / 460 * 100%);
  gap: calc(30 / 460 * 100%);
`;

const NavBtn = styled.button`
  background: #333;
  color: #fff;
  border: none;
  padding: calc(16 / 460 * 100%) calc(32 / 460 * 100%);
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #555;
  }
`;

const CloseBtn = styled.button`
  margin-top: calc(32 / 460 * 100%);
  background: transparent;
  border: 2px solid #333;
  color: #333;
  padding: calc(14 / 460 * 100%) calc(30 / 460 * 100%);
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
      <Inner>
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
                <TutoTxt className="font-18">
                  간단하게 진행 방식을 설명드리겠습니다.
                </TutoTxt>
                <TutoTxt className="font-18">
                  클릭하면 서류가 넘어가고 텍스트가 타이핑됩니다.
                  <br />
                  타이핑 도중 클릭 시 전체 출력이 됩니다.
                </TutoTxt>
                <TutoTxt className="font-18">
                  텍스트 타이핑 속도 조절기능 또한 설정 창 안에 들어가 있습니다.
                </TutoTxt>
                <TutoTxt className="font-18">
                  제가 만든 부분을 어떻게 생각하며 만들었는지 스토리 형식으로
                  만들었습니다.
                </TutoTxt>
                <TutoTxt className="font-18">
                  잘 봐주시면 감사하겠습니다!
                </TutoTxt>
              </SlideCard>
            </SwiperSlide>
            <SwiperSlide>
              <SlideCard>
                <TutoTitle className="font-24">⚙️ ? 버튼</TutoTitle>
                <TutoTxt className="font-18">텍스트의 진행 속도조절,</TutoTxt>
                <TutoTxt className="font-18">
                  데이터를 이용한 방식을 보여주기 위해 사용한 코드를 페이지
                  링크를 넣었습니다.
                </TutoTxt>
                <TutoTxt className="font-18">
                  해당 튜토리얼은 다시 ?버튼안의 내용을 통해 확인하실 수
                  있습니다.
                </TutoTxt>
                {/* 추가시 넣기 */}
              </SlideCard>
            </SwiperSlide>
            <SwiperSlide>
              <SlideCard>
                <TutoTitle className="font-24">📝 설명에 대하여</TutoTitle>
                <TutoTxt className="font-18">
                  어떤 의도를 갖고 만들었는지와 자기소개서를 적었습니다.
                </TutoTxt>
                <TutoTxt className="font-18">
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
      </Inner>
    </Overlay>
  );
};

export default TutorialModal;
