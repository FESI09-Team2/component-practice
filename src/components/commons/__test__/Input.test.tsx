import Input from '../Input';
import { fireEvent, render, screen } from '@testing-library/react';

describe('input 컴포넌트 렌더링', () => {
  test('input inputType text 일때 onchange 이벤트', () => {
    render(<Input inputType="text" />);

    const inputTypeText = screen.getByPlaceholderText('할일을 적어주세요.');
    expect(inputTypeText).toBeInTheDocument();

    fireEvent.change(inputTypeText, { target: { value: 'test' } });
    expect(inputTypeText).toHaveValue('test');
  });

  test('input inputType password 일때 onchange 이벤트', () => {
    render(<Input inputType="password" />);
    const inputTypePassword =
      screen.getByPlaceholderText('비밀번호를 입력해주세요.');

    fireEvent.change(inputTypePassword, { target: { value: '1234' } });
    expect(inputTypePassword).toHaveValue('1234');
  });

  test('input password 일때 버튼 클릭시 타입 변경', () => {
    render(<Input inputType="password" />);
    const inputTypePassword =
      screen.getByPlaceholderText('비밀번호를 입력해주세요.');
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(inputTypePassword).toHaveAttribute('type', 'text');

    fireEvent.click(button);
    expect(inputTypePassword).toHaveAttribute('type', 'password');
  });

  test('input inputType text 아닐 경우 버튼이 보이지 않아야 한다.', () => {
    render(<Input inputType="text" />);
    const button = screen.queryByRole('button');
    expect(button).toBeNull();
  });

  test('input password 일때 버튼의 이미지가 상태에 따라 달라진다.', () => {
    render(<Input inputType="password" />);
    const button = screen.getByRole('button');
    const image = screen.getByAltText('visibility');

    expect(image).toHaveAttribute('src', '/assets/common/visibility_off.svg');
    fireEvent.click(button);
    expect(image).toHaveAttribute('src', '/assets/common/visibility_on.svg');
  });
});
