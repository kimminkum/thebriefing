import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  height: 100vh;
  background: radial-gradient(circle at center, #0a0a0a, #000);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-10vh); /* ✅ 상단으로 끌어올림 */
`;

const Name = styled(motion.h1)`
  font-size: 3.2rem;
  font-weight: 800;
  color: #00ccff;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.7);
  margin-bottom: 2.5rem;
`;

const Sentence = styled.div`
  font-size: 1.5rem;
  line-height: 2.5rem;
  white-space: pre-wrap;
  letter-spacing: 0.04em;
  display: block; /* ✅ flex 대신 block으로 변경하여 <br /> 적용 가능 */
  text-align: center;
`;

const AnimatedLetter = styled(motion.span)`
  display: inline-block;
  filter: blur(4px);
`;

const OutroTitle = () => {
  const sentence = '보이는 것 뒤의\n설계까지 책임집니다.';

  return (
    <Container>
      <Inner>
        <Name
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          김민겸
        </Name>
        <Sentence>
          {sentence.split('').map((char, index) => {
            if (char === '\n') return <br key={index} />;
            return (
              <AnimatedLetter
                key={index}
                initial={{ opacity: 0, scale: 2, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{
                  delay: 1.5 + index * 0.05,
                  duration: 0.4,
                  ease: 'easeOut',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </AnimatedLetter>
            );
          })}
        </Sentence>
      </Inner>
    </Container>
  );
};

export default OutroTitle;
