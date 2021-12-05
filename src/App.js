import React, { useState, useEffect } from "react";
import { Layout, Menu, Badge } from "antd";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { formatPrice } from "./helpers/helpers";
import Routes from "./routes/routes";
import "antd/dist/antd.css";
import "./App.css";
import "./assets/css/reset.css";
import "./assets/css/base.css";
import "./assets/css/gird.css";
import "./assets/css/antd.css";
import "./assets/css/custom-antd.css";
import "./assets/css/app.scss";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UnorderedListOutlined,
  FormOutlined,
  FieldTimeOutlined,
  UserOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CodepenOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

function App() {
  const location = useLocation();
  const { pathname } = location;
  const carts = useSelector((state) => state.cartReducer.carts);
  const [totalPrice, setTotalPrice] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.title = "React";
  }, []);

  useEffect(() => {
    let tmpTotal = 0;
    carts.forEach((cart) => {
      tmpTotal += cart.product.price * cart.quantity;
    });

    setTotalPrice(tmpTotal);
  }, [carts]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Header className="header">
        <Link to="/" className="logo">
          <h2 className="logo">React</h2>
        </Link>
        <Menu mode="horizontal">
          <Menu.Item key="2"></Menu.Item>
          <Menu.Item key="/cart">
            <Link to="/cart">
              <span> Total: </span>
              <Badge
                count={formatPrice(totalPrice)}
                style={{ backgroundColor: "#52c41a" }}
              />
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider trigger={null} theme="light" collapsible collapsed={collapsed}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["/todos"]}
            selectedKeys={[pathname]}
          >
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">Trang chủ</Link>
            </Menu.Item>
            <Menu.Item key="/product" icon={<CodepenOutlined />}>
              <Link to="/product">Sản phẩm</Link>
            </Menu.Item>
            <Menu.Item key="/cart" icon={<ShoppingCartOutlined />}>
              <Link to="/cart">Giỏ hàng</Link>
            </Menu.Item>
            <Menu.Item key="/todos" icon={<UnorderedListOutlined />}>
              <Link to="/todos">Tất cả công việc</Link>
            </Menu.Item>
            <Menu.Item key="/todos/input" icon={<FormOutlined />}>
              <Link to="/todos/input">Thêm mới công việc</Link>
            </Menu.Item>
            <Menu.Item key="/todos/timeline" icon={<FieldTimeOutlined />}>
              <Link to="/todos/timeline">Timeline</Link>
            </Menu.Item>
            <Menu.Item key="/profile" icon={<UserOutlined />}>
              <Link to="/profile">Thông tin sinh viên</Link>
            </Menu.Item>
            <Menu.Item key="/team" icon={<UserOutlined />}>
              <Link to="/team">Thông tin nhóm</Link>
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
            }}
          >
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
