import React from "react";
import Menu from "./HeaderMenuElems/Menu";
import Sneakers from "./HeaderMenuElems/Sneakers";

const HeaderMenu = () => {
  return (
    <div className="flex gap-[56px] items-center">
      <Sneakers />
      <Menu />
    </div>
  );
};

export default HeaderMenu;
