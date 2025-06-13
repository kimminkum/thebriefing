// src/atoms/scenarioAtom.ts
import { atom, selector } from "recoil";
import { scenarioData } from "../data/scenarioData";

// 현재 보고 있는 시나리오 ID
export const currentScenarioIdState = atom<number>({
  key: "currentScenarioIdState",
  default: 1
});

// 현재 시나리오 내 텍스트 청크 인덱스
export const textChunkIndexState = atom<number>({
  key: "textChunkIndexState",
  default: 0
});

// 시나리오 진행도(%): 전체에서 몇 번째 아이디인지 계산
export const scenarioProgressState = selector<number>({
  key: "scenarioProgressState",
  get: ({ get }) => {
    const currentId = get(currentScenarioIdState);
    const idx = scenarioData.findIndex((item) => item.id === currentId);
    if (idx < 0) return 0;
    return ((idx + 1) / scenarioData.length) * 100;
  }
});
