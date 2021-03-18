import PageLayout from "@/components/PageLayout";
import { Button } from "antd";
import styles from "./index.less";

export default function IndexPage() {
  return (
    <PageLayout>
      <h1 className={styles.title}>Page index</h1>
      <div>
        <Button type="primary">Blah</Button>
      </div>
    </PageLayout>
  );
}
