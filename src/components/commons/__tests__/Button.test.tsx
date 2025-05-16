import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/commons/Button';
import '@testing-library/jest-dom';

describe('Button 컴포넌트', () => {
  test('variant="solid"이고 disabled=false이면 주황 배경 클래스가 적용된다.', () => {
    render(
      <Button variant="solid" disabled={false}>
        버튼
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('bg-orange-600');
  });

  test('variant="outline"이고 disabled=false이면 주황 테두리 클래스가 적용된다.', () => {
    render(
      <Button variant="outline" disabled={false}>
        버튼
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('border-orange-600');
  });

  test('variant="solid"이고 disabled=true이면 회색 배경 클래스가 적용된다.', () => {
    render(
      <Button variant="solid" disabled={true}>
        버튼
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('bg-gray-400');
  });

  test('variant="outline"이고 disabled=true이면 회색 테두리 클래스가 적용된다.', () => {
    render(
      <Button variant="outline" disabled={true}>
        버튼
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('border-gray-400');
  });

  test('size="large"면 너비가 20.7rem으로 설정된다.', () => {
    render(<Button size="large">버튼</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('w-[20.7rem]');
  });

  test('size="small"면 너비가 7.5rem으로 설정된다.', () => {
    render(<Button size="small">버튼</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('w-[7.5rem]');
  });

  test('disabled=true면 실제로 버튼이 비활성화된다.', () => {
    render(<Button disabled>버튼</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });

  test('onClick 핸들러가 정상적으로 동작한다.', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>버튼</Button>);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
