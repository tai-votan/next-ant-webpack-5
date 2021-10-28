import React from "react";
import { Row } from "antd";
import { BsChatDotsFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className={"container"}>
        <Row justify={"center"}>
          &copy; 2021 Recruitery Co. All rights reserved{" "}
          <a target="_blank" rel="noreferrer" href="https://m.me/recruitery.co">
            <BsChatDotsFill />
          </a>
        </Row>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
