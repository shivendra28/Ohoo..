import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import "./Sidebar.css";
import { GoPlus } from "react-icons/go";
import { CiCircleQuestion } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";
import { SlSettings } from "react-icons/sl";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <div className={`${extended ? "sidebar sidebar-extend" : "sidebar"}`}>
      <div className="top">
        <div className="menu">
          <MdMenu className="icon" onClick={() => setExtended(!extended)} />
        </div>
        <div className="new-chat">
          <GoPlus className="icon" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <CiChat1 className="icon" />
              <p>What is react...</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <GoQuestion className="icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <GoHistory className="icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <SlSettings className="icon" />
          {extended && <p>Setting</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
