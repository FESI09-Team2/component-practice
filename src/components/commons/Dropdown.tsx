'use client';

import { useState } from 'react';
import Sort from '../../../public/assets/common/sort.png';

export default function DropdownMenuDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDropdownMenu, setSelectedDropdownMenu] = useState('최신 순');

  const DropdownMenus = ['최신 순', '리뷰 높은 순', '참여 인원 순'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectDropdownMenu = (DropdownMenu: string) => {
    setSelectedDropdownMenu(DropdownMenu);
    setIsOpen(false);
  };

  return (
    <div className="mx-auto w-auto">
      <div className="relative bg-white">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between gap-[10px] rounded-xl border border-gray-100 px-[12px] py-[8px] text-gray-800"
        >
          {/*TODO: 이미지 관련 수정 필요 */}
          <img src={Sort.src} alt="정렬" width={20} height={20} />
          <span>{selectedDropdownMenu}</span>
        </button>

        {isOpen && (
          <div className="absolute gap-[10px] rounded-xl border border-gray-100 bg-white text-gray-800">
            {DropdownMenus.map((DropdownMenu) => (
              <div
                key={DropdownMenu}
                onClick={() => selectDropdownMenu(DropdownMenu)}
                className="cursor-pointer rounded-xl px-[12px] py-[8px] hover:bg-orange-100"
              >
                <span>{DropdownMenu}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
