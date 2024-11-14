import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";

const Sidebar = ({bgColor, color}) => {
  return (
    <>
    <div className="side_bar_content" style={{
      backgroundColor: `${bgColor}`,
      color: `${color}`
    }}>
      <div className="top_content">
        <div className="items"> <FaHome className='icons' /> Home</div>
        <div className="items"> <IoIosNotifications className='icons' /> Notification</div>
        <div className="items"> <FaShoppingBag className='icons' /> Shop</div>
        <div className="items"> <FaWallet className='icons' /> Conversection</div>
        <div className="items"> <IoMdChatbubbles className='icons' /> Wallet</div>
        <div className="items"> <FaYoutube className='icons' /> Subscrigtion</div>
        <div className="items"> <CgProfile className='icons' /> My Progile</div>
      </div>
      <div className="bottom_content items"> <RiLogoutBoxFill className='icons' /> Log Out</div>
    </div>
    </>
  )
}

export default Sidebar