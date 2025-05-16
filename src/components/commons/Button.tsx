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
  ...props
}: ButtonProps) {
  const buttonClasses = clsx(
    'h-[2.75rem] rounded-[0.75rem] flex items-center justify-center text-[1rem] font-semibold',
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
      'w-[20.7rem]': size === 'large',
      'w-[7.5rem]': size === 'small',
    },
    className,
  );

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
