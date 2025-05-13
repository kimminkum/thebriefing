import React from "react";

const ClickGuide: React.FC = () => {
  return (
    <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-xl text-sm w-full max-w-sm mx-auto">
      <p>튜토리얼이나 대사가 끝날 때 우측 하단에</p>
      <p className="font-semibold">‘다음’ 클릭 유도 버튼</p>
      <p>을 표시해 직관적 흐름을 유도합니다.</p>
    </div>
  );
};

export default ClickGuide;
