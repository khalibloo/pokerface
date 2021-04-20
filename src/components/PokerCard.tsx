import React from "react";
import { Button, ButtonProps } from "antd";

interface Props extends ButtonProps {}
const PokerCard: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Button style={{ height: 176, width: 133 }} {...rest}>
      {children}
    </Button>
  );
};

export default PokerCard;
