import React from "react";
import "./Main.css";
import { FaRegLightbulb } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { PiCompassRose } from "react-icons/pi";
import { GrGallery } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";


function Main() {
  return (
    <div className="main">
      <div className="nav">
        <p>Ohoo..</p>
        <img
          src="https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-600nw-542759665.jpg"
          alt=""
          className="profile-img"
        />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautyful places to see on an upcoming road trip</p>
            <PiCompassRose className="icon" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept:urban planning</p>
            <FaRegLightbulb className="icon" />
          </div>
          <div className="card">
            <p>Brainstrom team bonding activites for our work retreat</p>
            <LuMessagesSquare className="icon" />
          </div>
          <div className="card">
            <p>Improve the redebility of the following code</p>
            <FaCode className="icon" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt hear" />
            <div>
            <MdOutlineAddPhotoAlternate  className="icon" />
            <FaMicrophone  className="icon" />
            <IoSend  className="icon" />


            </div>
          </div>
          <div className="bottom-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            possimus veritatis harum accusamus, id minus pariatur enim eligendi
            ipsam fugiat sed eum. Iure, quos.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
