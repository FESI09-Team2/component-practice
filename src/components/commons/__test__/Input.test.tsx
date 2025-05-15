import Input from '../Input';
import { fireEvent, render, screen } from '@testing-library/react';

describe('input 컴포넌트 렌더링', () => {
  test('input inputType text 일때 onchange 이벤트', () => {
    render(<Input />);

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
});
