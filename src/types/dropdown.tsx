export interface DropdownMenuProps {
  id: number;
  title: string;
  review: number;
  participants: number;
  createdAt: string;
}

export interface DropdownProps {
  onSelect: (selectedDropdownMenu: string) => void;
}
