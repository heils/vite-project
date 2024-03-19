interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'large';
    label?: string;
    disabled?: boolean;
    onClick?: () => void;
  }
  
  export type { ButtonProps };