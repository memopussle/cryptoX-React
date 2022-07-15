import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./styles/styles";
import { Layout, Typography } from "antd";
import "./App.scss";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <div className="background">
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content className="content">
          {" "}
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
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default App;
