import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const CustomDropdown = (props: any) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="d-flex justify-content-center p-5">
      {`isOpen=${isOpen}`}
      <Dropdown
        isOpen={isOpen}
        toggle={() => {
          setIsOpen(!isOpen);
        }}
      >
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
