import React, { useState, useRef } from 'react';
import { CodeInput } from './CodeInput';
import { ActionButton } from './ActionButton';

interface CodeVerificationProps {
  phoneNumber?: string;
  onCodeSubmit?: (code: string) => void;
  onResendCode?: () => void;
}

export const CodeVerification: React.FC<CodeVerificationProps> = ({
  phoneNumber = '+372123456',
  onCodeSubmit,
  onResendCode,
}) => {
  const [code, setCode] = useState(['2', '4', '6', '8', '2', '5']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input if value is entered
    if (value && index < 5) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to move to previous input
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      onCodeSubmit?.(fullCode);
    }
  };

  const isCodeComplete = code.every(digit => digit !== '');

  return (
    <main className="flex flex-col items-center w-full">
      <div className="flex w-[428px] flex-col items-start gap-4 absolute h-[60px] px-8 py-2 left-0 top-[154px] max-md:w-full max-sm:w-full max-sm:px-4 max-sm:py-2">
        <div className="flex w-[382px] items-start relative">
          <h1 className="flex-[1_0_0] text-[#0A3149] text-4xl font-[590] leading-[44px] tracking-[-0.45px] relative max-sm:text-[28px] max-sm:leading-9">
            Enter your code
          </h1>
        </div>
      </div>

      <div className="flex w-[428px] flex-col items-start gap-4 absolute h-[60px] px-8 py-2 -left-px top-[222px] max-md:w-full max-sm:w-full max-sm:px-4 max-sm:py-2">
        <div className="flex w-[382px] items-start gap-2.5 relative">
          <div className="flex w-[102px] items-start shrink-0 self-stretch relative pl-0 pr-4 py-[11px]">
            <div className="w-[102px] h-[22px] shrink-0 overflow-hidden text-[#0A3149] text-ellipsis whitespace-nowrap text-[17px] font-normal leading-[22px] tracking-[-0.43px] relative">
              {phoneNumber}
            </div>
          </div>
          <button
            onClick={onResendCode}
            className="flex w-[102px] items-start shrink-0 self-stretch relative pl-0 pr-4 py-[11px] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:ring-opacity-50 rounded"
          >
            <div className="w-[102px] h-[22px] shrink-0 overflow-hidden text-[#007AFF] text-ellipsis whitespace-nowrap text-[17px] font-bold leading-[22px] tracking-[-0.43px] relative">
              Resend
            </div>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex w-[428px] flex-col items-start gap-4 absolute h-[62px] px-8 py-2 -left-px top-[332px] max-md:w-full max-sm:w-full max-sm:px-4 max-sm:py-2">
          <fieldset className="flex h-[46px] items-start gap-2.5 self-stretch relative max-sm:gap-[5px]">
            <legend className="sr-only">Enter 6-digit verification code</legend>
            {code.map((digit, index) => (
              <CodeInput
                key={index}
                value={digit}
                onChange={(value) => handleCodeChange(index, value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                index={index}
                autoFocus={index === 0}
              />
            ))}
          </fieldset>
        </div>

        <div className="absolute left-4 top-[816px] max-md:left-4 max-sm:left-2">
          <ActionButton
            type="submit"
            disabled={!isCodeComplete}
          >
            next
          </ActionButton>
        </div>
      </form>
    </main>
  );
};
