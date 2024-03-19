// Dropdown.types.ts

export interface DropdownProps {
    options: any[]; // Change 'any' to the specific type of options if possible
    search?: string;
    selection?: boolean;
    value?: any; // Change 'any' to the specific type of value if possible
    setValue: (value: any) => void; // Change 'any' to the specific type of value if possible
  }
  