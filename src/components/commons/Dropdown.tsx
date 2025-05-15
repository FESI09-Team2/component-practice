'use client';

import { useState } from 'react';
import Sort from '../../../public/assets/common/sort.png';

export default function FrameworkDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState('최신 순');

  const frameworks = ['최신 순', '리뷰 높은 순', '참여 인원 순'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectFramework = (framework: string) => {
    setSelectedFramework(framework);
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        {/* Dropdown Button */}
        <button onClick={toggleDropdown}>
          <img src={Sort.src} alt="정렬" width={20} height={20} />

          <span>{selectedFramework}</span>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div>
            {frameworks.map((framework) => (
              <div key={framework} onClick={() => selectFramework(framework)}>
                {selectedFramework === framework && <span>✓</span>}
                <span>{framework}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
