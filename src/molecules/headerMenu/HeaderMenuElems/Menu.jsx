import React from "react";
import Collections from "../../../atoms/headerElems/Collections";
import Men from "../../../atoms/headerElems/Men";
import Women from "../../../atoms/headerElems/Women";
import About from "../../../atoms/headerElems/About";
import Contact from "../../../atoms/headerElems/Contact";
const Menu = () => {
  return (
    <div className="flex gap-[32px] text-[#69707D] text-[15px] leading-[26px] cursor-pointer">
      <Collections />
      <Men />
      <Women />
      <About />
      <Contact />
    </div>
  );
};

export default Menu;
