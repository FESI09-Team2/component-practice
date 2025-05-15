/**
 TODO: API 데이터 확인 변경 필요
 */
export interface DropdownMenuProps {
  id: number;
  title: string;
  review: number;
  participants: number;
  createdAt: string;
}

export interface DropdownProps {
  onSelect: (selectedDropdownMenu: string) => void;
  menuOptions: string[];
  iconSrc?: string;
}
