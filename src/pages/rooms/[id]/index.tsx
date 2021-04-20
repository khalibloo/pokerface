import React, { useState } from "react";
import { Card, Col, Modal, Row } from "antd";
import PokerCard from "@/components/PokerCard";
import CardForm from "@/components/CardForm";

interface Props {}
const RoomPage: React.FC<Props> = () => {
  const pokerCards = [
    { id: "1", text: "1" },
    { id: "2", text: "2" },
    { id: "3", text: "3" },
    { id: "5", text: "5" },
    { id: "8", text: "8" },
    { id: "13", text: "13" },
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
