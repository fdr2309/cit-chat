import React from "react";

const FriendAccept = () => {
  return (
    <div className=" flex items-center justify-between py-[13px] border-b-[1px] border-gray-300">
      <div>
        <img
          className="w-[70px] h-[70px] rounded-full"
          src="/fdrlogo.jpg"
          alt=""
        />
      </div>

      <div className="w-[80%] ms-[14px]">
        <h2 className=" font-poppins font-semibold text-[18px] text-black">
          DIV Vai
        </h2>
        <p className=" font-poppins font-medium text-[14px] text-textSecondary">
          Hi Guys, Wassup!
        </p>
      </div>

      <button className=" font-poppins font-semibold text-[20px] text-white bg-secondary rounded-[5px] px-[8px] me-[12px]">
        Accept
      </button>
    </div>
  );
};

export default FriendAccept;
