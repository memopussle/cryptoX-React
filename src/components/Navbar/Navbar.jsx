import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

const Navbar = () => (
  <>
    <Title className="logo">h1. Ant Design</Title>
    <Title level={2} className="logo">
      h2. Ant Design
    </Title>
    <Title level={3} className="logo">
      h3. Ant Design
    </Title>
    <Title level={4} className="logo">
      h4. Ant Design
    </Title>
    <Title level={5} className="logo">
      h5. Ant Design
    </Title>
  </>
);

export default Navbar;
