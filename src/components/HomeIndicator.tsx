import React from 'react';

export const HomeIndicator: React.FC = () => {
  return (
    <footer className="flex w-[428px] flex-col items-start absolute h-[34px] left-0 top-[898px]">
      <div className="flex flex-col items-start relative">
        <div className="flex w-[430px] h-[34px] flex-col justify-end items-center relative pb-2">
          <div className="w-[154px] h-[5px] shrink-0 backdrop-blur-2xl relative bg-black rounded-[100px]" />
        </div>
      </div>
    </footer>
  );
};
