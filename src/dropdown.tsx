import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const CustomDropdown = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-flex justify-content-center p-5">
      <Dropdown
        isOpen={isOpen}
        toggle={() => {
          setIsOpen(!isOpen);
        }}
      >
        <DropdownToggle caret>Select Value</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Mr.</DropdownItem>
          <DropdownItem>Mrs.</DropdownItem>
          <DropdownItem>Miss</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
