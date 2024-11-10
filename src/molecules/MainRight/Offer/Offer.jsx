import React from "react";
import Price from "../../../atoms/MainRightElems/Price";
import Sale from "../../../atoms/MainRightElems/Sale";
import Discount from "../../../atoms/MainRightElems/Discount";

const Offer = () => {
  return (
    <div className="flex flex-col gap-[5px]">
      <div className="flex items-center gap-[24px]">
        <Price />
        <Sale />
      </div>
      <Discount />
    </div>
  );
};

export default Offer;
