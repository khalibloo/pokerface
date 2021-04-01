import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface Props {
  card?: { id: number; value: string };
}
const CardForm: React.FC<Props> = ({ card }) => {
  return (
    <Form
      layout="horizontal"
      initialValues={{ value: card?.value }}
      requiredMark={false}
    >
      <Row gutter={16}>
        <Col span={16}>
          <Form.Item name="value">
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              {card ? "Update" : "Add"}
            </Button>
          </Form.Item>
        </Col>
        {card && (
          <Col>
            <Form.Item>
              <Button danger icon={<DeleteOutlined />} />
            </Form.Item>
          </Col>
        )}
      </Row>
    </Form>
  );
};

export default CardForm;
