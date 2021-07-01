import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button } from "antd";

const Detail = (props: RouteComponentProps) => {
  const navigationTo = () => {
    props.history.goBack();
  };
  return (
    <div>
      detail page
      <Button type="primary" onClick={navigationTo}>
        跳转home页
      </Button>
    </div>
  );
};

export default Detail;
