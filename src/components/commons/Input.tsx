'use client';
import useInput from '@/hooks/useInput';
import Image from 'next/image';
import { useState } from 'react';

export default function Input({ inputType = 'text' }: { inputType?: string }) {
  const { value, handleChange } = useInput({ initialValue: '' });
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`inline-flex min-w-[240px] items-center rounded-md border border-gray-200 bg-white px-2 ${value ? 'border-2 border-orange-500' : 'border'}`}
    >
      <input
        className="w-full py-1 outline-none"
        type={isVisible ? 'text' : 'password'}
        value={value}
        onChange={handleChange}
        placeholder={
          inputType === 'password'
            ? '비밀번호를 입력해주세요.'
            : '할일을 적어주세요.'
        }
      />
      {inputType === 'password' && (
        <button
          className="cursor-pointer"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          <Image
            src={isVisible ? 'visibility_on.svg' : '/visibility_off.svg'}
            alt="visibility"
            width={20}
            height={20}
          />
        </button>
      )}
    </div>
  );
}
