export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioButtonProps {
  options: Option[];
  name: string;
}
