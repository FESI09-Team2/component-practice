'use client';

import Input from '@/components/commons/Input';
import useInput from '@/hooks/useInput';

export default function Home() {
  const { value, handleChange } = useInput({
    initialValue: { username: '', password: '', number: '' },
  });

  return (
    <div>
      <Input
        inputType="text"
        placeholder="할일을 적어주세요."
        value={value.username}
        name={'username'}
        handleChange={handleChange}
      />
      <Input
        inputType="password"
        placeholder="비밀번호를 입력해주세요."
        value={value.password}
        name={'password'}
        handleChange={handleChange}
      />
      <Input
        inputType="number"
        placeholder="숫자를 입력해주세요."
        value={value.number}
        name={'number'}
        handleChange={handleChange}
      />
    </div>
  );
}
