import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 스타일
const Wrapper = styled.div`
  border: 2px solid #ccc;
  padding: 24px;
  border-radius: 12px;
  background: #fff;
  width: 100%;
  max-width: 560px;
  margin: 20vh auto 0;
  text-align: center;
`;

const TextWindow = styled.div`
  margin-top: 16px;
  font-size: 18px;
  min-height: 40px;
`;

const ClickGuide = styled.div`
  margin-top: 12px;
  color: #888;
  font-size: 14px;
  animation: blink 1s infinite;

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

const ProgressBar = styled.div`
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background: #ff3b30;
  transition: width 0.8s ease;
`;

const TypingFlow: React.FC = () => {
  const fullText1 = "이건 미리보기야. 클릭 없이 흐름이 전개돼.";
  const fullText2 = "다음 흐름으로 자동 전환됐어.";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0); // 0: 첫 텍스트, 1: 클릭 유도, 2: 다음 텍스트
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step === 0 && index < fullText1.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText1[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
    if (index === fullText1.length && step === 0) {
      setTimeout(() => setStep(1), 500);
    }
  }, [index, step]);

  useEffect(() => {
    if (step === 1) {
      // 클릭 유도 잠시 보여주고 다음으로 넘어감
      setTimeout(() => {
        setText(fullText2);
        setStep(2);
        setProgress(100);
      }, 1500);
    }
  }, [step]);

  return (
    <Wrapper>
      <ProgressBar>
        <ProgressFill width={progress} />
      </ProgressBar>
      <TextWindow>{text}</TextWindow>
      {step === 1 || (step === 2 && <ClickGuide>▶ 클릭 유도</ClickGuide>)}
    </Wrapper>
  );
};

export default TypingFlow;
