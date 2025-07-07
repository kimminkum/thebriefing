// src/components/TutorialModal.tsx
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

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
  min-width: 360px;
  max-width: 600px;
  padding: 1rem;
`;

const ModalBox = styled.div`
  width: 100%;
  background: #fdfdfd;
  color: #111;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const SlideCard = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 280px;
`;

const TutoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #222;
`;

const TutoTxt = styled.p`
  font-size: 1rem;
  color: #444;
  white-space: pre-line;
  line-height: 1.6;
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.75rem;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #aaa;
  }

  &:last-of-type {
    margin-bottom: 1.25rem;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const NavBtn = styled.button`
  background: #333;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #555;
  }
`;

const CloseBtn = styled.button`
  margin-top: 1.25rem;
  background: transparent;
  border: 2px solid #333;
  color: #333;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
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

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [onClose]);

  return (
    <Overlay>
      <Inner>
        <ModalBox ref={modalRef}>
          <Swiper
            slidesPerView={1}
            pagination={{ type: 'fraction' }}
            modules={[Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            style={{ overflow: 'hidden' }}
          >
            <SwiperSlide>
              <SlideCard>
                <TutoTitle>🖱️ 인터랙션 안내</TutoTitle>
                <TutoTxt>이 포트폴리오는 시나리오 기반으로 구성되어 있습니다.</TutoTxt>
                <TutoTxt>화면을 클릭하면 텍스트가 타이핑되며, 클릭 시 전체 출력됩니다.</TutoTxt>
                <TutoTxt>튜토리얼은 언제든지 ? 버튼을 눌러 다시 확인할 수 있습니다.</TutoTxt>
              </SlideCard>
            </SwiperSlide>

            <SwiperSlide>
              <SlideCard>
                <TutoTitle>⚙️ 상단 버튼 기능</TutoTitle>
                <TutoTxt>📘 튜토리얼 다시 보기</TutoTxt>
                <TutoTxt>
                  📊 데이터 보기 – 프로젝트에서 사용한 JSONPlaceholder 데이터를 보여줍니다.
                </TutoTxt>
                <TutoTxt>✍️ 타이핑 속도 조절 – 타이핑 속도를 자유롭게 설정할 수 있습니다.</TutoTxt>
              </SlideCard>
            </SwiperSlide>

            <SwiperSlide>
              <SlideCard>
                <TutoTitle>📝 자기소개 시나리오</TutoTitle>
                <TutoTxt>
                  시나리오에는 자기소개서, 보유 기술, 프로젝트 설계가 포함되어 있습니다.
                </TutoTxt>
                <TutoTxt>화면을 클릭하며 순차적으로 읽어주세요.</TutoTxt>
                <TutoTxt>마지막에는 GitHub, 블로그 등의 외부 링크도 연결되어 있습니다.</TutoTxt>
              </SlideCard>
            </SwiperSlide>
          </Swiper>

          <FlexBox>
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
