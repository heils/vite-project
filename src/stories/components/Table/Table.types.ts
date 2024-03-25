export interface Column {
  key: string;
  title: string;
}

export interface TableProps {
  columns: Column[];
  data: string[][];
  disabled : boolean;
}
