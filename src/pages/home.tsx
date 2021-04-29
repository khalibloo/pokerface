import React, { useEffect, useState } from "react";
import { Button, Col, List, Row, Spin, Typography } from "antd";
import Modal from "antd/lib/modal/Modal";
import CreateRoomForm from "@/components/CreateRoomForm";
import { useAuth0 } from "@auth0/auth0-react";
import { history } from "umi";
import { useRooms } from "@/queries/useRooms";
import axios from "@/utils/request";

export default function IndexPage() {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    getAccessTokenSilently,
  } = useAuth0();
  const [createRoomModalOpen, setCreateRoomModalOpen] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const { data: rooms, isLoading: isRoomsLoading } = useRooms({
    enabled: hasToken,
  });

  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      history.push("/");
    }
  }, [isAuthLoading]);

  useEffect(() => {
    getAccessTokenSilently().then((token) => {
      axios.defaults.headers["Authorization"] = `Bearer ${token}`;
      setHasToken(true);
    });
  }, [getAccessTokenSilently]);

  if (isAuthLoading) {
    return (
      <Row justify="center" style={{ marginTop: "40vh" }}>
        <Spin size="large" />
      </Row>
    );
  }

  return (
    <>
      <Modal
        title="Create Room"
        footer={null}
        visible={createRoomModalOpen}
        onCancel={() => setCreateRoomModalOpen(false)}
      >
        <CreateRoomForm />
      </Modal>
      <Row justify="center">
        <Col span={16}>
          <Row justify="end" style={{ paddingTop: 36, paddingBottom: 36 }}>
            <Button
              type="primary"
              size="large"
              onClick={() => setCreateRoomModalOpen(true)}
            >
              Create Room
            </Button>
          </Row>
          <Typography.Title level={2} style={{ textAlign: "center" }}>
            Available Rooms
          </Typography.Title>
          <List
            dataSource={rooms}
            loading={isRoomsLoading}
            renderItem={(room) => (
              <List.Item>
                <List.Item.Meta title={room.name} />
                <Button type="primary">Join</Button>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}
