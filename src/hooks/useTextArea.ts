import React, { useCallback, useState } from 'react';

export default function useTextArea(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const handlerValue = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [],
  );
  return [value, handlerValue] as const;
}
