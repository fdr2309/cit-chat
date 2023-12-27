import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddUser from "./AddUser";

const UserList = () => {
  return (
    <div>
      <div className="px-[23px] py-[13px] ms-[22px] shadow-custom rounded-[20px]">
        <div className="flex items-center justify-between">
          <h2 className=" font-poppins font-semibold text-[20px] text-black">
            User List
          </h2>
          <BsThreeDotsVertical size={20} className="text-secondary" />
        </div>

        <AddUser />
        <AddUser />
        <AddUser />
        <AddUser />
        <AddUser />
      </div>
    </div>
  );
};

export default UserList;
