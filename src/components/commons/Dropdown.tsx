'use client';

import { useState } from 'react';

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
          <span>버튼자리</span>
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
