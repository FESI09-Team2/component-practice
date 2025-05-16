import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
  size?: 'large' | 'small';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'solid',
  size = 'large',
  disabled = false,
  className,
}: ButtonProps) {
  const buttonClasses = clsx(
    'h-[44px] rounded-[12px] flex items-center justify-center text-[16px] font-semibold',
    {
      'bg-orange-600 hover:bg-orange-700 active:bg-orange-800  text-white':
        variant === 'solid' && !disabled,
      'bg-white border border-solid border-orange-600 text-orange-600 hover:border-orange-500 hover:text-orange-500 active:border-orange-700 active:text-orange-700':
        variant === 'outline' && !disabled,
      'bg-gray-400  text-white': variant === 'solid' && disabled,
      'bg-white border border-solid border-gray-400 text-gray-400':
        variant === 'outline' && disabled,
    },
    {
      'w-[332px]': size === 'large',
      'w-[120px]': size === 'small',
    },
    className,
  );

  return <button className={buttonClasses}>{children}</button>;
}
