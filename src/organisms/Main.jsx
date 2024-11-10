import React from "react";
import MainLeft from "../molecules/MainLeft/MainLeft";
import MainRight from "../molecules/MainRight/MainRight";

const Main = ({ increase, decrease, count, onCount, secondCount }) => {
  return (
    <div className="flex gap-[125px] pt-[85px] items-center justify-center px-[45px]">
      <MainLeft />
      <MainRight
        increase={increase}
        decrease={decrease}
        count={count}
        onCount={onCount}
        secondCount={secondCount}
      />
    </div>
  );
};

export default Main;
