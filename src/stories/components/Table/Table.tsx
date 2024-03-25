import React from "react";
import styled, { css } from "styled-components";
import { TableProps } from './Table.types';

// Styled components
const StyledTable = styled.div.attrs<{ isDisabled: boolean }>((props) => ({
  as: "div",
  isDisabled: props.isDisabled
}))`
  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid blue; /* Border color */
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid gray; /* Border color */
  }

  th {
    background-color: blue; /* Header background color */
    color: white; /* Header text color */
  }

  tr:nth-child(even) {
    background-color: lightgray; /* Even row background color */
  }

  tr:hover {
    background-color: #f2f2f2; /* Hovered row background color */
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.5; /* Dim the table if disabled */
      pointer-events: none; /* Disable pointer events */
    `}
`;

const Table: React.FC<TableProps> = ({ columns, data, disabled }) => {
  return (
    <StyledTable isDisabled={disabled}>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTable>
  );
};

export { Table };
