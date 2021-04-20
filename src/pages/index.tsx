import { useAuth0 } from "@auth0/auth0-react";
import { Button, Col, Row, Spin, Typography } from "antd";
import { Redirect } from "umi";
import styles from "./index.less";

export default function IndexPage() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <Row justify="center" style={{ marginTop: "40vh" }}>
        <Spin size="large" />
      </Row>
    );
  }
  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <>
      <Row justify="center" style={{ marginTop: 48 }}>
        <Col span={16} style={{ textAlign: "center" }}>
          <Typography.Title
            level={1}
            style={{ textAlign: "center", marginBottom: 36 }}
          >
            Welcome to Pokerface
          </Typography.Title>
          <div>
            <Typography.Text style={{ fontSize: "2rem" }}>
              Lorem ipsum blah blah blah
            </Typography.Text>
          </div>
          <div>
            <Typography.Text style={{ fontSize: "2rem" }}>
              Sign in to proceed
            </Typography.Text>
          </div>
          <Row justify="center" style={{ marginTop: 36 }}>
            <Button
              type="primary"
              size="large"
              shape="round"
              onClick={loginWithRedirect}
            >
              Sign In or Create an Account
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
}
