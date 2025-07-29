import React from 'react';

interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex w-[396px] h-12 justify-center items-center gap-2 shrink-0 shadow-[0_4px_4px_0_rgba(190,92,85,0.42)] bg-[#B5453D] px-[162px] py-4 rounded-lg max-md:w-[calc(100%_-_32px)] max-sm:w-[calc(100%_-_16px)] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#B5453D] focus:ring-opacity-50 ${className}`}
    >
      <span className="text-[#F8F1EC] text-center text-base font-bold leading-6 uppercase relative">
        {children}
      </span>
    </button>
  );
};
