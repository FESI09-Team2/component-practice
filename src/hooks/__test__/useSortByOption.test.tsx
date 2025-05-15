import { renderHook } from '@testing-library/react';
import useSortedData from '../useSortByOption';

describe('useSortedData 테스트', () => {
  test('최신 순 정렬이 잘 되는지?', () => {
    const { result } = renderHook(() => useSortedData('최신 순'));
    expect(result.current.map((d) => d.id)).toEqual([1, 2, 3]); // 2024-05-14 > 12 > 10
  });

  test('리뷰 높은 순 정렬이 잘 되는지?', () => {
    const { result } = renderHook(() => useSortedData('리뷰 높은 순'));
    expect(result.current.map((d) => d.id)).toEqual([2, 1, 3]); // 4.8 > 4.5 > 4.0
  });

  test('참여 인원 순 정렬이 잘 되는지?', () => {
    const { result } = renderHook(() => useSortedData('참여 인원 순'));
    expect(result.current.map((d) => d.id)).toEqual([3, 1, 2]); // 20 > 12 > 8
  });

  test('기본 정렬 (변경 없음)', () => {
    const { result } = renderHook(() => useSortedData(''));
    expect(result.current.map((d) => d.id)).toEqual([1, 2, 3]);
  });
});
