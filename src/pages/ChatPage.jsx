import React from "react";
import Navber from "../components/navber";
import ChatPageGroupSection from "../components/ChatPageGroupSection";
import ChatPageFriendSection from "../components/ChatPageFriendSection";
import ChatBody from "../components/ChatBody";

const ChatPage = () => {
  return (
    <div className="h-screen flex px-[35px] py-[49px]">
      <div className="w-1/12">
        <Navber />
      </div>
      <div className="w-4/12 ps-[40px] pe-[23px]">
        <ChatPageGroupSection />
        <ChatPageFriendSection />
      </div>

      <div className="w-7/12 pe-[23px]">
        <ChatBody />
      </div>
    </div>
  );
};

export default ChatPage;
