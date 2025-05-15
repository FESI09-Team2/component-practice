import Input from '@/components/commons/Input';

export default function Home() {
  return (
    <div>
      <div className="w-[300px]">
        <Input />
        <Input inputType="password" />
      </div>
    </div>
  );
}
