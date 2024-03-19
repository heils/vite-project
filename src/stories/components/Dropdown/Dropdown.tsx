// Dropdown.tsx

import React, { useState, useRef } from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledDropdown = styled.div<DropdownProps>`
  margin-top: 200px;
  height: 200px;
  width: 90px;
`;

const OptionList = styled.div<{ isOpen: boolean }>`
  /* Styles */
  position: absolute;
  bottom: ${({ isOpen }) => (isOpen ? "100%" : "auto")};
  top: ${({ isOpen }) => (isOpen ? "calc(100% - 360px)" : "calc(100% + 5px)")};
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Option = styled.div`
  /* Styles */
  padding: 8px;
  cursor: pointer;
  
  border: 0.1px solid #000000;

  &:hover {
    background-color: #bfbfbf; /* lighter shade when hovered */
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  search = "small",
  selection,
  value,
  setValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setValue(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Add event listener to handle clicks outside the dropdown
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <StyledDropdown options={options} setValue={setValue} ref={dropdownRef}>
      <div onClick={toggleDropdown}>{value || "Menu"}</div>
      <OptionList isOpen={isOpen}>
        {isOpen &&
          options.map((option: any, index: number) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              {option.value}
            </Option>
          ))}
      </OptionList>
    </StyledDropdown>
  );
};

export default Dropdown;
