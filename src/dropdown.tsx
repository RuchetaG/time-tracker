import React, { useState } from "react";
import Select from "react-select";

export const Countries: Option[] = Object.entries(countries).map(
  ([key, value]) => ({
    label: value.name,
    value: key.toLowerCase(),
    data: { ...value, code: key.toLowerCase() },
  })
);

export interface Option {
  label: string;
  value: string | boolean;
  data: any;
  isDisabled?: boolean;
}
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
