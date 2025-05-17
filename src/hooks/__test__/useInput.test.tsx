import { act, renderHook } from '@testing-library/react';
import useInput from '../useInput';
import { ChangeEvent } from 'react';

describe('useInput 테스트', () => {
  test('초기값이 올바르게 들어갔는지 확인', () => {
    const { result } = renderHook(() =>
      useInput({ initialValue: { username: '', password: '', number: '' } }),
    );
    expect(result.current.value).toEqual({
      username: '',
      password: '',
      number: '',
    });
  });

  test('value 값이 올바르게 입력 되는지 확인', () => {
    const { result } = renderHook(() =>
      useInput({ initialValue: { username: '', password: '', number: '' } }),
    );

    const mockEvent = {
      target: { name: 'username', value: '김철수' },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(mockEvent);
    });
    expect(result.current.value).toEqual({
      username: '김철수',
      password: '',
      number: '',
    });
  });
});
