import Image from "next/image";
import React from "react";

const DiscountBar = () => {
  return (
    <div className="flex h-9 w-full items-center justify-center space-x-6 bg-[#F4F4F4]">
      <Image src="../icons/leftArr.svg" alt="search" width={20} height={20} />
      <span>Get 10% off on business sign up</span>
      <Image src="../icons/rightArr.svg" alt="search" width={20} height={20} />
    </div>
  );
};

export default DiscountBar;
