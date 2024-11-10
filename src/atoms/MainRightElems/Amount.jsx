import React, { useState } from "react";
import Minus from "../../assets/Minus.svg";
import Plus from "../../assets/plus.svg";
const Amount = ({ increase, decrease, count, secondCount }) => {
  //   const [count, SetCount] = useState(0);
  //   function increase() {
  //     SetCount(count + 1);
  //   }
  //   function decrease() {
  //     if (count > 0) {
  //       SetCount(count - 1);
  //     }
  //   }
  return (
    <div className=" flex justify-around items-center w-[157px] h-[56px] gap-[10px] bg-[#F6F8FD] rounded-[10px]">
      <img src={Minus} alt="" className="cursor-pointer" onClick={decrease} />
      <div>{secondCount}</div>
      <img src={Plus} alt="" className="cursor-pointer" onClick={increase} />
    </div>
  );
};

export default Amount;
