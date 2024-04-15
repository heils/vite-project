import React from "react";
import styled, { css } from "styled-components";
import { TableProps } from "./Table.types";
import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow"
import { TableCell } from "../TableCell";
import { TableFooter } from "../TableFooter";

const StyledTable = styled.div.attrs<{ isDisabled: boolean }>((props) => ({
  as: "div",
  isDisabled: props.isDisabled,
}))`
  table {
    width: 100%;s
    border-collapse: collapse;
    border: 1px solid blue;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

const Table: React.FC<TableProps> = ({ columns, data, disabled }) => {
  return (
    <StyledTable isDisabled={disabled}>
      <table>
        <thead>
          <TableRow>
            {columns.map((column) => (
              <TableHeader key={column.key} title={column.title} />
            ))}
          </TableRow>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns.length}>Footer Content</TableCell>
          </TableRow>
        </TableFooter>
      </table>
    </StyledTable>
  );
};

export { Table };
