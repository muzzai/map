import React from "react";
import MapBox from "./map/Map";
// @ts-ignore
import { connect } from "react-redux";
import SearchUser from "./SearchUser";
import { getOffice, getPeople } from "../actions";
import { Layout, Menu, Dropdown } from "antd";

const { Header, Content, Footer } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const App = (props: any) => {
  props.getOffice(1);
  props.getPeople();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1" isSelected={false}>
            <SearchUser people={props.people} style={{ width: 200 }} />
          </Menu.Item>
          <Menu.Item key="2">
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Hover me
              </a>
            </Dropdown>{" "}
          </Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <MapBox />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

const mapStateToProps = ({ people }: any) => ({ people });

export default connect(null, { getOffice, getPeople })(App);
