import React, { createContext, useContext, ReactNode, useState } from "react";

// 상태 타입 정의
interface GlobalState {
  footerHeight: number;
  otherVariable: string;
  options: string[]; // SelectBox 옵션 추가
  setFooterHeight: (height: number) => void;
  setOtherVariable: (value: string) => void;
  setOptions: (options: string[]) => void; // 옵션 설정 함수 추가
}

// 초기 상태
const initialState: GlobalState = {
  footerHeight: 700,
  otherVariable: "",
  options: ["햄버거", "클릭", "메론소다"], // 초기 옵션 값
  setFooterHeight: () => {},
  setOtherVariable: () => {},
  setOptions: () => {}, // 초기 함수
};

// Context 생성
const GlobalContext = createContext<GlobalState>(initialState);

// Provider 컴포넌트
const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [footerHeight, setFooterHeight] = useState<number>(
    initialState.footerHeight
  );
  const [otherVariable, setOtherVariable] = useState<string>(
    initialState.otherVariable
  );
  const [options, setOptions] = useState<string[]>(initialState.options);

  return (
    <GlobalContext.Provider
      value={{
        footerHeight,
        otherVariable,
        options,
        setFooterHeight,
        setOtherVariable,
        setOptions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// 커스텀 훅
const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
