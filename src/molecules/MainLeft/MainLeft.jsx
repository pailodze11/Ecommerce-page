import React from "react";
import MainLeftTop from "./MainLeftElems/MainLeftTop";
import MainLeftBottom from "./MainLeftElems/MainLeftBottom";

const MainLeft = () => {
  return (
    <div className="flex flex-col gap-[31px] flex-1">
      <MainLeftTop />
      <MainLeftBottom />
    </div>
  );
};

export default MainLeft;
