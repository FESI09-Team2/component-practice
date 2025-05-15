import { UseInputProps, UseInputReturn } from '@/types/input';
import { useState } from 'react';

export default function useInput({
  initialValue,
}: UseInputProps): UseInputReturn {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, handleChange };
}
