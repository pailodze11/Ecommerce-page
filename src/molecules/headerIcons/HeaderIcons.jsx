import React from "react";
import Cart from "../../atoms/headerElems/Cart";
import Profile from "../../atoms/headerElems/Profile";

const HeaderIcons = ({ count }) => {
  return (
    <div className="flex justify-center content-center items-center gap-[46px]">
      <Cart count={count} />
      <Profile />
    </div>
  );
};

export default HeaderIcons;
