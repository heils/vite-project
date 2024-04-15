import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid gray;
`;

export const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <StyledTableCell>{children}</StyledTableCell>;
};

export default TableCell;
