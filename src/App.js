import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UnorderedListOutlined,
  FormOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

import Routes from "./routes/routes";

const { Header, Sider, Content } = Layout;

function App() {
  const location = useLocation();
  const { pathname } = location;
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.title = "Todo App";
  }, []);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} theme="light" collapsible collapsed={collapsed}>
        <h2 className="logo"> {collapsed ? "Todo" : "Todo App"}</h2>
        <Menu
          mode="inline"
          defaultSelectedKeys={["/todos"]}
          selectedKeys={[pathname]}
        >
          <Menu.Item key="/todos" icon={<UnorderedListOutlined />}>
            <Link to="/todos">All Todo</Link>
          </Menu.Item>
          <Menu.Item key="/todos/input" icon={<FormOutlined />}>
            <Link to="/todos/input">New Todo</Link>
          </Menu.Item>
          <Menu.Item key="/timeline" icon={<FieldTimeOutlined />}>
            <Link to="/timeline">Timeline</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
