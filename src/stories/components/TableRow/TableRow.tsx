import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: lightgray;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};

export default TableRow;
