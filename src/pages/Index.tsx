import React from 'react';
import { StatusBar } from '@/components/StatusBar';
import { NavigationHeader } from '@/components/NavigationHeader';
import { CodeVerification } from '@/components/CodeVerification';
import { HomeIndicator } from '@/components/HomeIndicator';

const Index = () => {
  const handleBackClick = () => {
    console.log('Back button clicked');
    // Add navigation logic here
  };

  const handleCodeSubmit = (code: string) => {
    console.log('Code submitted:', code);
    // Add code verification logic here
  };

  const handleResendCode = () => {
    console.log('Resend code requested');
    // Add resend logic here
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Pro:wght@400;590;700&display=swap"
        rel="stylesheet"
      />
      <div className="w-[428px] h-[932px] relative bg-white mx-auto my-0 max-md:w-full max-md:max-w-[428px] max-sm:w-full max-sm:h-screen max-sm:min-h-[932px]">
        <StatusBar />
        
        <NavigationHeader onBackClick={handleBackClick} />
        
        <CodeVerification
          phoneNumber="+372123456"
          onCodeSubmit={handleCodeSubmit}
          onResendCode={handleResendCode}
        />
        
        <HomeIndicator />
      </div>
    </>
  );
};

export default Index;
