export interface Option {
  label: string;
  value: string;
  backgroundColor?: string;
  disabled?: boolean;
}

export interface RadioButtonProps {
  options: Option[];
  backgroundColor?: string;
  name: string;
}
