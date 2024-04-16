export interface DropdownProps {
  options: any[];
  search?: string;
  selection?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  value?: any;
  setValue: (value: any) => void;
}
