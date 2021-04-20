import CreateRoomForm from "@/components/CreateRoomForm";
import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import styles from "./index.less";

export default function IndexPage() {
  const [createRoomModalOpen, setCreateRoomModalOpen] = useState(false);

  return (
    <>
      <h1>Landing Page</h1>
      <div>
        <Modal
          visible={createRoomModalOpen}
          onCancel={() => setCreateRoomModalOpen(false)}
        >
          <CreateRoomForm />
        </Modal>
        <Button type="primary" onClick={() => setCreateRoomModalOpen(true)}>
          Create Room
        </Button>
      </div>
    </>
  );
}
