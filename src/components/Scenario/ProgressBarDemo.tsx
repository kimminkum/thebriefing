import React from "react";

const ProgressBarDemo: React.FC = () => {
  return (
    <div className="p-4 w-full max-w-sm mx-auto">
      <p className="mb-2 text-sm">진행도를 시각화하여 사용자 위치 파악 유도</p>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-green-400 w-3/5 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default ProgressBarDemo;
