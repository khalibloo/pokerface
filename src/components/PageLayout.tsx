import React from "react";
import { Layout } from "antd";

interface Props {}
const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content style={{ backgroundColor: "#fff" }}>
        {children}
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
};

export default PageLayout;
