import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const menu = (
  <Menu
    items={[
      {
        label: "Mr.",
        key: "0",
      },
      {
        label: "Mrs.",
        key: "1",
      },
      {
        label: "Miss",
        key: "2",
      },
    ]}
  />
);

export const CustomDropdown = () => (
  <Dropdown overlay={menu} trigger={["click"]}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Click me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
