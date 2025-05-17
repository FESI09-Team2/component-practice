import Input from '../Input';
import { fireEvent, render, screen } from '@testing-library/react';

describe('input 컴포넌트 렌더링', () => {
  test('input inputType text 일때 onchange 이벤트', () => {
    render(
      <Input
        inputType="text"
        name="username"
        placeholder="할일을 적어주세요."
        value="홍길동"
        handleChange={jest.fn()}
      />,
    );

    const inputTypeText = screen.getByPlaceholderText(
      '할일을 적어주세요.',
    ) as HTMLInputElement;
    expect(inputTypeText).toBeInTheDocument();
    expect(inputTypeText.value).toBe('홍길동');
    expect(inputTypeText.type).toBe('text');
  });

  test('input password 일때 렌더링되고, 토글 버튼도 존재 한다', () => {
    render(
      <Input
        inputType="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        value="홍길동"
        handleChange={jest.fn()}
      />,
    );

    const inputPassword = screen.getByPlaceholderText(
      '비밀번호를 입력해주세요.',
    ) as HTMLInputElement;

    expect(inputPassword).toBeInTheDocument();
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(inputPassword.type).toBe('text');
  });

  test('onChange 이벤트 작동', () => {
    const handleChange = jest.fn();

    render(
      <Input
        inputType="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        value="홍길동"
        handleChange={handleChange}
      />,
    );
    const inputTypePassword = screen.getByPlaceholderText(
      '비밀번호를 입력해주세요.',
    ) as HTMLInputElement;

    fireEvent.change(inputTypePassword, { target: { value: '홍길동' } });
    expect(inputTypePassword.value).toBe('홍길동');
  });
});
