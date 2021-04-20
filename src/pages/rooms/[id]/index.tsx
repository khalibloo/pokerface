import React from "react";
import { Card, Col, Row } from "antd";
import PokerCard from "@/components/PokerCard";

interface Props {}
const RoomPage: React.FC<Props> = () => {
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
              <Row gutter={[24, 24]}>
                {pokerCards.map(({ id, text }) => (
                  <Col>
                    <PokerCard key={id}>{text}</PokerCard>
                  </Col>
                ))}
              </Row>
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

export default RoomPage;
