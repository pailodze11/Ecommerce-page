import React from "react";
import AddToCartBtn from "../../../atoms/MainRightElems/AddToCartBtn";
import Amount from "../../../atoms/MainRightElems/Amount";

const AddToCart = ({ increase, decrease, count, onCount, secondCount }) => {
  return (
    <div className="flex gap-[16px]">
      <Amount
        increase={increase}
        decrease={decrease}
        count={count}
        secondCount={secondCount}
      />
      <AddToCartBtn onCount={onCount} count={count} secondCount={secondCount} />
    </div>
  );
};

export default AddToCart;
