import { renderHook, act } from '@testing-library/react';
import useTextArea from './useTextArea';

describe('useTextAarea hook text', () => {
  it('초기 값 설정', () => {
    const { result } = renderHook(() => useTextArea('Initial Value'));
    const [value] = result.current;
    expect(value).toBe('Initial Value');
  });
  it('업데이트 동작여부', () => {
    const { result } = renderHook(() => useTextArea('Initial Value'));
    const [, handlerValue] = result.current;
    // 이벤트 정상 업데이트 여부
    act(() => {
      handlerValue({
        target: { value: 'Updated Value' },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });
    const [value] = result.current;
    // 이벤트 발생시 Updated Value 값 변경 테스트
    expect(value).toBe('Updated Value');
  });
  it('useCallback 메모리제이션', () => {
    const { result, rerender } = renderHook(() => useTextArea('Initial Value'));
    const [, initialHandler] = result.current;
    rerender();
    const [, updatedHandler] = result.current;
    expect(initialHandler).toBe(updatedHandler);
  });
});
