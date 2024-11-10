import React from "react";
import FallLimited from "../../atoms/MainRightElems/FallLimited";
import SneakerCompany from "../../atoms/MainRightElems/SneakerCompany";
import Caption from "../../atoms/MainRightElems/Caption";
import Offer from "./Offer/Offer";
import AddToCart from "./AddToCart/AddToCart";

const MainRight = ({ increase, decrease, count, onCount, secondCount }) => {
  return (
    <div className="flex flex-1 flex-col gap-[30px]">
      <SneakerCompany />
      <FallLimited />
      <Caption />
      <Offer />
      <AddToCart
        increase={increase}
        decrease={decrease}
        count={count}
        onCount={onCount}
        secondCount={secondCount}
      />
    </div>
  );
};

export default MainRight;
