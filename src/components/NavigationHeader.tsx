import React from 'react';

interface NavigationHeaderProps {
  onBackClick?: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({ onBackClick }) => {
  return (
    <nav className="flex w-[430px] h-11 items-center shrink-0 absolute px-4 py-0 left-0 top-[72px] max-md:w-full max-sm:w-full max-sm:px-2 max-sm:py-0">
      <div className="flex flex-col items-start relative left-5">
        <div className="flex w-5 h-11 flex-col items-start relative" />
      </div>
      <button
        onClick={onBackClick}
        className="focus:outline-none focus:ring-2 focus:ring-[#205B3D] focus:ring-opacity-50 rounded"
        aria-label="Go back"
      >
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=\"102:508\" layer-name=\"Back Button\" data-component-name=\"chevron-left\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"back-button\" style=\"width: 40px; height: 40px; flex-shrink: 0; position: relative\"> <path d=\"M25 30L15 20L25 10\" stroke=\"#205B3D\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
          }}
        />
      </button>
    </nav>
  );
};
