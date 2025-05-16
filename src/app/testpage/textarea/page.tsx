'use client';
import TextArea from '@/components/commons/Textarea';
import useTextArea from '@/hooks/useTextArea';

export default function Home() {
  const [textValue, handlerValue] = useTextArea('');
  return (
    <div>
      <TextArea
        placeholder="할 일의 제목을 적어주세요."
        value={textValue}
        onChange={handlerValue}
      />
    </div>
  );
}
