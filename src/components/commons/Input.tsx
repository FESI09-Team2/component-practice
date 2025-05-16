'use client';
import useInput from '@/hooks/useInput';
import { InputProps } from '@/types/input';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

export default function Input({ inputType = 'text' }: InputProps) {
  const { value, handleChange } = useInput({ initialValue: '' });
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={clsx(
        'flex max-w-[15rem] items-center rounded-xs border border-gray-200 bg-white px-2',
        value ? 'border-2 border-orange-500' : 'border',
      )}
    >
      <input
        className="w-full py-1 outline-none"
        type={inputType === 'password' && !isVisible ? 'password' : 'text'}
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
            src={
              isVisible
                ? '/assets/common/visibility_on.svg'
                : '/assets/common/visibility_off.svg'
            }
            alt="visibility"
            width={20}
            height={20}
          />
        </button>
      )}
    </div>
  );
}
