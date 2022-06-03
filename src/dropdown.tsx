import React, { useState } from "react";
import Select from "react-select";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const options = [
  {
    value: "Mr.",
    label: "Mr.",
  },
  { value: "Mrs.", label: "Mrs." },
  { value: "Miss", label: "Miss" },
];

export const CustomDropdown = (props: any) => {
  return <Select className="color-black" options={options} />;
};

// <div className="d-flex justify-content-center p-5">
{
  /* <Dropdown
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
</div> */
}
