import React from "react";
import HeaderMenu from "../molecules/headerMenu/HeaderMenu";
import HeaderIcons from "../molecules/headerIcons/HeaderIcons";

const Header = ({ count }) => {
  return (
    <div className="pt-[30px] pb-[45px] flex justify-between border-b-[1px]">
      <HeaderMenu />
      <HeaderIcons count={count} />
    </div>
  );
};

export default Header;
