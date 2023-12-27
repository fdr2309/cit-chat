import React from "react";
import Navber from "../components/navber";
import GroupRequestList from "../components/GroupRequestList";
import FriendsList from "../components/FriendsList";
import UserList from "../components/UserList";
import FriendRequestList from "../components/FriendRequestList";
import GroupList from "../components/GroupList";
import BlockList from "../components/BlockList";

const Home = () => {
  return (
    <div className="h-screen flex px-[35px] py-[49px]">
      <div className="w-1/12">
        <Navber />
      </div>
      <div className="w-11/12 ps-[40px] pe-[23px]">
        <div className="flex">
          <div className="w-4/12">
            <GroupRequestList />
          </div>
          <div className="w-4/12">
            <FriendsList />
          </div>
          <div className="w-4/12">
            <UserList />
          </div>
        </div>

        <div className="flex mt-[43px]">
          <div className="w-4/12">
            <FriendRequestList />
          </div>
          <div className="w-4/12">
            <GroupList />
          </div>
          <div className="w-4/12">
            <BlockList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
