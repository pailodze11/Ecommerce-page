import React from "react";
import CartImg from "../../assets/Chart.svg";
const Cart = ({ count }) => {
  return (
    <div className="cursor-pointer">
      <img src={CartImg} alt="" />
      <div
        style={{ display: count === 0 ? "none" : "flex" }}
        className="absolute w-[19px] h-[13px] bg-[#FF7E1B] rounded-[6.5px] top-[39px] right-[255px] flex justify-center items-center text-[10px] text-[white]"
      >
        {count}
      </div>
    </div>
  );
};

export default Cart;
