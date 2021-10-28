import React, { useMemo } from "react";
import Link from "next/link";
import { Col, Menu, Row, Space } from "antd";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import {
  HiBriefcase,
  HiClipboardCheck,
  HiDocumentSearch,
  HiIdentification,
} from "react-icons/hi";
import { EAccountType } from "@/utils/constant";
import { SelectLang, Notifications } from "@/components";
import { CurrentUser } from "@/models/user";

const NavBar = React.memo(({ accountType }: { accountType: EAccountType }) => {
  const { t } = useTranslation();
  console.log("Func:  - Params: accountType", accountType);
  const navItems = useMemo(
    () => [
      {
        role: [EAccountType.RECRUITER, EAccountType.COMPANY],
        title: "jobs",
        route: "/job",
        icon: <HiBriefcase />,
      },
      {
        role: [EAccountType.RECRUITER, EAccountType.COMPANY],
        title: "candidates",
        route: "/candidates",
        icon: <HiIdentification />,
      },
      {
        role: [EAccountType.RECRUITER],
        title: "referral",
        route: "/referrals",
        icon: <HiClipboardCheck />,
      },
      {
        role: [EAccountType.RECRUITER, EAccountType.COMPANY],
        title: "marketplace",
        route: "/marketplace",
        icon: <HiDocumentSearch />,
      },
    ],
    []
  );

  return (
    <Nav mode="horizontal">
      {navItems.map((nav) => {
        if (nav.role.includes(accountType)) {
          return (
            <NavItem key={nav.title} icon={nav.icon}>
              <Link href={nav.route}>{t(nav.title)}</Link>
            </NavItem>
          );
        }
        return null;
      })}
    </Nav>
  );
});

const Header = ({ currentUser }: { currentUser: CurrentUser }) => {
  return (
    <HeaderWrap>
      <div className={"container"}>
        <Row align={"middle"}>
          <Col>
            <Logo src={"/logo.svg"} width={40} height={40} />
          </Col>
          <Col flex="auto">
            <NavBar accountType={currentUser.accountType} />
          </Col>
          <Col xs={4}>
            <Space size={"middle"} align={"center"}>
              <SelectLang />
              <Notifications />
            </Space>
          </Col>
        </Row>
      </div>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  background-color: #1aa94c;
  padding: 2px 0;
`;

const Nav = styled(Menu)`
  border-color: transparent;
`;

const NavItem = styled(Menu.Item)`
  text-transform: uppercase;
  &:after {
    display: none;
  }
`;

const Logo = styled.img`
  background-color: #e7ffef;
  border-radius: 11px; ;
`;
