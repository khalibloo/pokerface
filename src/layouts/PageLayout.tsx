import React, { useState } from "react";
import { Layout, Menu, message, Modal } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {}
const PageLayout: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item hidden={isAuthenticated} onClick={loginWithRedirect}>
            Sign In
          </Menu.Item>
          <Menu.Item
            hidden={!isAuthenticated}
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Sign Out
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content style={{ backgroundColor: "#fff" }}>
        {children}
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
};

export default PageLayout;
