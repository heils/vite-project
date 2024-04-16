import React from "react";
import styled from "styled-components";
import { TableHeaderProps } from "./TableHeader.types";

const StyledTableHeader = styled.th`
  padding: 8px;
  text-align: left;
  background-color: blue;
  color: white;
  border-bottom: 1px solid gray;
`;

export const TableHeader: React.FC<TableHeaderProps> = ({ title }) => {
  return <StyledTableHeader>{title}</StyledTableHeader>;
};

export default TableHeader;
