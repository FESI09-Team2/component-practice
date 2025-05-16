'use client';

import { useState } from 'react';
import Image from 'next/image';
import DefaultSortIcon from '@public/assets/common/ic_sort.svg';
import { DropdownProps } from '@/types/dropdown';

export default function DropdownMenuDropdown({
  onSelect,
  menuOptions,
  iconSrc = DefaultSortIcon,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDropdownMenu, setSelectedDropdownMenu] = useState('최신 순');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (DropdownMenu: string) => {
    setSelectedDropdownMenu(DropdownMenu);
    setIsOpen(false);
    onSelect(DropdownMenu);
  };

  const isDefeaultIcon = iconSrc === DefaultSortIcon;

  return (
    <div className="mx-auto w-auto">
      <div className="relative bg-white">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between gap-[0.625rem] rounded-xl border border-gray-100 px-[0.75rem] py-[0.5rem] text-gray-800"
        >
          {isDefeaultIcon ? (
            <>
              <Image src={iconSrc} alt="정렬" width={24} height={24} />
              <span className="hidden sm:inline">{selectedDropdownMenu}</span>
            </>
          ) : (
            <>
              <span>{selectedDropdownMenu}</span>
              <Image src={iconSrc} alt="정렬" width={24} height={24} />
            </>
          )}
        </button>

        {isOpen && (
          <div className="absolute gap-[0.625rem] rounded-xl border border-gray-100 bg-white text-gray-800">
            {menuOptions.map((option) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                className="cursor-pointer rounded-xl px-[0.75rem] py-[0.5rem] hover:bg-orange-100"
              >
                <span>{option}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
