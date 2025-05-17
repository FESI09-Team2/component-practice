import { useState } from 'react';

interface UseInputProps {
  initialValue: { [key: string]: string };
}

export default function useInput({ initialValue }: UseInputProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
    console.log(value);
  };

  return { value, handleChange };
}
