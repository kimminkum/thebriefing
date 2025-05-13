import React from "react";

const MobileSpacingDemo: React.FC = () => {
  return (
    <div className="p-4 text-sm max-w-md mx-auto">
      <p className="mb-2">모바일에서 최소 여백 및 폰트 크기 clamp 사용 예시:</p>
      <div
        className="bg-gray-100 rounded-lg p-4 text-base"
        style={{ fontSize: "clamp(14px, 4vw, 18px)" }}
      >
        이 텍스트는 반응형으로 크기가 조절됩니다.
      </div>
    </div>
  );
};

export default MobileSpacingDemo;
