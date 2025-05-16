import { act, renderHook } from '@testing-library/react';
import useInput from '../useInput';
import { ChangeEvent } from 'react';

describe('useInput 테스트', () => {
  test('초기값이 올바르게 들어갔는지 확인', () => {
    const { result } = renderHook(() => useInput({ initialValue: '' }));
    expect(result.current.value).toBe('');
  });

  test('value 값이 올바르게 입력 되는지 확인', () => {
    const { result } = renderHook(() => useInput({ initialValue: '' }));

    const mockEvent = {
      target: { value: '123' },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(mockEvent);
    });
    expect(result.current.value).toBe('123');
  });
});
