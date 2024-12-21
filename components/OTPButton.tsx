import React, { useState } from 'react';
import { TextMorph } from './ui/text-morph';

export function OTPButton() {
  const [text, setText] = useState('OTP');
  const [otpVisible, setOtpVisible] = useState(false);

  const handleClick = () => {
    if (!otpVisible) {
      setText('123456');
      setOtpVisible(true);
    } else {
      setText('OTP');
      setOtpVisible(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className='flex h-10 w-[120px] flex-shrink-0 items-center justify-center rounded-full bg-black px-4 text-base font-medium text-zinc-50 shadow-sm transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200'
    >
      <TextMorph className='uppercase'>{text}</TextMorph>
    </button>
  );
}
