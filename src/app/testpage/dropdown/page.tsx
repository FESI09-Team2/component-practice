'use client';

import { useEffect, useState } from 'react';
import Dropdown from '@/components/commons/Dropdown';
import { DropdownMenuProps } from '@/types/dropdown';

// TODO: MSW로 변경
const mockData = [
  { id: 1, title: 'A', review: 4.5, participants: 12, createdAt: '2024-05-14' },
  { id: 2, title: 'B', review: 4.8, participants: 8, createdAt: '2024-05-12' },
  { id: 3, title: 'C', review: 4.0, participants: 20, createdAt: '2024-05-10' },
];

export default function Home() {
  const [sortOption, setSortOption] = useState('최신 순'); // Dropdown 옵션 관리
  const [sortedData, setSortedData] = useState<DropdownMenuProps[]>([]); // 정렬된 데이터 관리

  // TODO: hooks로 분리
  // TODO: API 작업 완료 후 데이터 가져오고, responde data 수정
  useEffect(() => {
    const copied = [...mockData];
    let sorted;

    switch (sortOption) {
      case '최신 순':
        sorted = copied.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
      case '리뷰 높은 순':
        sorted = copied.sort((a, b) => b.review - a.review);
        break;
      case '참여 인원 순':
        sorted = copied.sort((a, b) => b.participants - a.participants);
        break;
      default:
        sorted = copied;
    }

    setSortedData(sorted);
  }, [sortOption]);

  return (
    <>
      <Dropdown onSelect={setSortOption} />
      <div className="mt-4 space-y-2">
        {sortedData.map((item) => (
          <div key={item.id} className="rounded-lg border px-4 py-2 shadow-sm">
            <p className="font-semibold">{item.title}</p>
            <p>리뷰: {item.review}</p>
            <p>참여 인원: {item.participants}</p>
            <p>작성일: {item.createdAt}</p>
          </div>
        ))}
      </div>
    </>
  );
}
