import React, { useRef } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { useClickOutside } from '../useClickOutside';

// 각 테스트 후 DOM 정리
afterEach(cleanup);

// 테스트용 컴포넌트 정의
function TestComponent({ onClickOutside }: { onClickOutside: () => void }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, onClickOutside);

  return (
    <div>
      {/* 클릭 감지를 위한 내부 요소 */}
      <div ref={ref} data-testid="inside">
        Inside Element
      </div>

      {/* 외부 클릭을 시뮬레이션할 요소 */}
      <div data-testid="outside">Outside Element</div>
    </div>
  );
}

describe('useClickOutside 훅 테스트', () => {
  test('요소 외부를 클릭하면 onclickOutside가 호출된다.', () => {
    const handleClickOutside = jest.fn();
    const { getByTestId } = render(
      <TestComponent onClickOutside={handleClickOutside} />,
    );

    fireEvent.mouseDown(getByTestId('outside'));

    expect(handleClickOutside).toHaveBeenCalledTimes(1);
  });

  test('요소 내부를 클릭하면 onclickOutside가 호출되지 않는다.', () => {
    const handleClickOutside = jest.fn();
    const { getByTestId } = render(
      <TestComponent onClickOutside={handleClickOutside} />,
    );

    fireEvent.mouseDown(getByTestId('inside'));

    expect(handleClickOutside).not.toHaveBeenCalled();
  });
});
