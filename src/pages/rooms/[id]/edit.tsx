import React from "react";
import { Card, Col, Row } from "antd";
import PokerCard from "@/components/PokerCard";
import CardForm from "@/components/CardForm";

interface Props {}
const EditRoomPage: React.FC<Props> = () => {
  const pokerCards = [
    { id: "1", text: "1" },
    { id: "2", text: "2" },
    { id: "3", text: "3" },
    { id: "tea", text: "Tea" },
  ];
  return (
    <>
      <Row justify="center" style={{ marginTop: 48, marginBottom: 48 }}>
        <Col span={16}>
          <Row gutter={36}>
            <Col span={16}>
              <CardForm card={{ id: 1, value: "1" }} />
              <CardForm card={{ id: 1, value: "1" }} />
              <CardForm />
            </Col>
            <Col span={8}>
              <Card>
                <p>Side content</p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default EditRoomPage;
