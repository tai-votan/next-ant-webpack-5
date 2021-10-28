import React from "react";
// import { useRouter } from "next/router";
import { AiOutlineBell } from "react-icons/ai";
import {
  Dropdown,
  // Tabs,
  Badge,
} from "antd";

// const { TabPane } = Tabs;

const Notifications = () => {
  // const router = useRouter();
  // const { locales = [], locale = "vi", asPath } = router;

  // const notificationBox = () => (
  //   <Tabs defaultActiveKey="1">
  //     <TabPane tab="Tab 1" key="1">
  //       Content of Tab Pane 1
  //     </TabPane>
  //     <TabPane tab="Tab 2" key="2">
  //       Content of Tab Pane 2
  //     </TabPane>
  //     <TabPane tab="Tab 3" key="3">
  //       Content of Tab Pane 3
  //     </TabPane>
  //   </Tabs>
  // );

  return (
    <Dropdown overlay={<>asda</>} placement="bottomRight">
      <Badge size={"small"} count={8}>
        <AiOutlineBell style={{ fontSize: 20, color: "#fff" }} />
      </Badge>
    </Dropdown>
  );
};

export default Notifications;
