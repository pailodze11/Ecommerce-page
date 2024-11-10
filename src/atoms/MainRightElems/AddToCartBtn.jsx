import React from "react";
import CartImg from "../../assets/CartBtn.svg";
const AddToCartBtn = ({ onCount, count, secondCount }) => {
  return (
    <div
      className="w-[272px] h-[56px] rounded-[10px] bg-[#FF7E1B] cursor-pointer shadow-custom flex justify-center items-center gap-[15px] hover:bg-[#FFAB6A] "
      onClick={() => onCount(secondCount)}
    >
      <img src={CartImg} alt="" />
      <p className="text-[white] text-[16px] font-bold flex-2">Add to cart</p>
    </div>
  );
};

export default AddToCartBtn;
