import React from "react";
import { Button } from "antd";

interface Props {}
const PokerCard: React.FC<Props> = ({ children }) => {
  return <Button style={{ height: 176, width: 133 }}>{children}</Button>;
};

export default PokerCard;
