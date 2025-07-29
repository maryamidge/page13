import React, { useRef, useEffect } from 'react';

interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  index: number;
  autoFocus?: boolean;
}

export const CodeInput: React.FC<CodeInputProps> = ({
  value,
  onChange,
  onKeyDown,
  index,
  autoFocus = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.slice(-1); // Only take the last character
    onChange(newValue);
  };

  return (
    <div className="flex w-[52px] items-start self-stretch relative pl-0 pr-4 py-[11px] border-b-[#545456] border-b border-solid max-sm:w-[45px] max-sm:pl-0 max-sm:pr-2 max-sm:py-[11px]">
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength={1}
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        className="w-[52px] h-[22px] shrink-0 overflow-hidden text-[#161A1E] text-center text-ellipsis whitespace-nowrap text-xl font-normal leading-[22px] tracking-[-0.43px] relative max-sm:w-[45px] max-sm:text-lg bg-transparent border-none outline-none focus:ring-0"
        aria-label={`Verification code digit ${index + 1}`}
      />
    </div>
  );
};
