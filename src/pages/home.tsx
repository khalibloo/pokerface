import React from "react";
import PageLayout from "@/components/PageLayout";
import { Button, Col, List, Row, Typography } from "antd";

export default function IndexPage() {
  const rooms = [
    { id: 1, name: "Blah" },
    { id: 2, name: "Meow" },
    { id: 3, name: "Mario" },
    { id: 4, name: "Bowser" },
    { id: 5, name: "Peach" },
  ];

  return (
    <PageLayout>
      <Typography.Title level={1} style={{ textAlign: "center" }}>
        Available Rooms
      </Typography.Title>
      <Row justify="center">
        <Col span={16}>
          <List
            dataSource={rooms}
            renderItem={(room) => (
              <List.Item>
                <List.Item.Meta title={room.name} />
                <Button type="primary">Join</Button>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </PageLayout>
  );
}
