import styled, { keyframes, css } from "styled-components";

const bounceIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(0.95); }
  100% { transform: scale(1); }
`;

export const typeColorMap: Record<string, string> = {
  normal: "#DCDCDC",
  fire: "#FF7043",
  water: "#4FC3F7",
  electric: "#FFEB3B",
  grass: "#81C784",
  ice: "#81D4FA",
  fighting: "#E57373",
  poison: "#BA68C8",
  ground: "#D7CCC8",
  flying: "#90CAF9",
  psychic: "#CE93D8",
  bug: "#A5D6A7",
  rock: "#BCAAA4",
  ghost: "#9575CD",
  dragon: "#7986CB",
  dark: "#A1887F",
  steel: "#B0BEC5",
  fairy: "#F8BBD0",
  default: "#ECEFF1"
};

export const ShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SelectRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(12 / 654 * 100%);
  flex-wrap: wrap;
  margin-bottom: calc(24 / 654 * 100%);
`;

export const SelectTitle = styled.label`
  font-weight: 600;
  color: #333;
  min-width: fit-content;
`;
export const StyledSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: Pretendard, sans-serif;
  background: #fff;
  min-width: 140px;

  @media (max-width: 480px) {
    flex-grow: 1;
    max-width: 200px;
  }
`;
export const CardWrapper = styled.div<{ poketype?: string }>`
  width: 92%;
  max-width: 320px;
  margin: 0 auto;
  padding: calc(20 / 654 * 100%);
  border-radius: 16px;
  background: ${({ poketype }) =>
    `linear-gradient(to bottom right, ${
      typeColorMap[poketype ?? "default"]
    }, #ffffff)`};
  border: 2px solid #ddd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const NameBar = styled.div`
  background: #fff59d;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
`;

export const ImageBox = styled.div`
  background: #fff;
  border-radius: 12px;
  margin: 0.6rem auto;
  padding: 1rem;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 1rem 0;
  background: #f8f8f8;
  padding: 0.75rem;
  border-radius: 8px;
`;

export const InfoItem = styled.div`
  font-size: 0.9rem;
  color: #444;
  display: flex;
  flex-direction: column;
  align-items: center;

  span.value {
    font-weight: bold;
    color: #111;
    margin-top: 2px;
  }
`;

export const Badge = styled.div`
  display: inline-block;
  background: #2f2f2f;
  color: #fff;
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 999px;
  margin-top: 0.5rem;
`;

export const DexWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
`;
export const StatsBox = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  background: #fdfdfd;
  border-radius: 10px;
`;

export const StatRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: calc(10 / 654 * 100%);
  gap: 8px;
`;

export const StatLabel = styled.div`
  width: 100px;
  font-weight: 600;
  color: #333;
  font-size: 0.75rem;
  text-align: right;
`;

export const StatBarWrapper = styled.div`
  position: relative;
  flex: 1;
  background: #eee;
  border-radius: 6px;
  height: 10px;
`;

export const StatBarFill = styled.div<{ percent: number }>`
  height: 100%;
  width: ${({ percent }) => `${percent}%`};
  background: linear-gradient(90deg, #00c6ff, #0072ff);
  border-radius: 6px;
  transition: width 0.4s ease;
`;

export const StatValue = styled.div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  font-weight: bold;
  color: #111;
`;
