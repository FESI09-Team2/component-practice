'use client';
import { useState } from 'react';
import clsx from 'clsx';
import VisibilityOn from '@/assets/common/ic_visibility_on.svg';
import VisibilityOff from '@/assets/common/ic_visibility_off.svg';
import Image from 'next/image';

export interface InputProps {
  inputType?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  inputType,
  placeholder,
  value,
  handleChange,
  name,
}: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const inputTypeAttr =
    inputType === 'password' ? (isVisible ? 'text' : 'password') : inputType;
  return (
    <div
      className={clsx(
        'flex max-w-[15rem] items-center rounded-xs border border-gray-200 bg-white px-2 focus-within:border-orange-500',
      )}
    >
      <input
        className="w-full py-1 outline-none"
        type={inputTypeAttr}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {inputType === 'password' && (
        <button
          className="cursor-pointer"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          <Image
            src={isVisible ? VisibilityOn : VisibilityOff}
            alt="visibility"
            width="20"
            height="20"
          ></Image>
        </button>
      )}
    </div>
  );
}
