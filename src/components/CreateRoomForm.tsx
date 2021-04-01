import React from "react";
import { Button, Form, Input } from "antd";

interface Props {}
const CreateRoomForm: React.FC<Props> = () => {
  return (
    <Form layout="vertical" requiredMark={false}>
      <Form.Item label="Name">
        <Input />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateRoomForm;
