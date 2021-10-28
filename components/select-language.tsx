import React, { useMemo } from "react";
import { Dropdown, Menu } from "antd";
import { useRouter } from "next/router";
import { AiOutlineGlobal } from "react-icons/ai";

const SelectLang = () => {
  const router = useRouter();
  const { locales = [], locale = "vi", asPath } = router;

  const changeLang = ({ key }: { key: string }) =>
    router.push(asPath, asPath, { locale: key });

  const languageLabels: { [key: string]: string } = {
    vi: "Vietnamese",
    en: "English",
  };

  const langMenu = useMemo(
    () => (
      <Menu selectedKeys={[locale]} onClick={changeLang}>
        {locales.map((l) => (
          <Menu.Item key={l}>{languageLabels[l]}</Menu.Item>
        ))}
      </Menu>
    ),
    [languageLabels]
  );

  return (
    <Dropdown overlay={langMenu} placement="bottomRight">
      <AiOutlineGlobal style={{ fontSize: 18, color: "#fff" }} />
    </Dropdown>
  );
};

export default React.memo(SelectLang);
