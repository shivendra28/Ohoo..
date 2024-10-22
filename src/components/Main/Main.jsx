import React, { useContext } from "react";
import "./Main.css";
import { FaRegLightbulb } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { PiCompassRose } from "react-icons/pi";
import { FaMicrophone } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { Context } from "../context/context";

function Main() {
  const {
    prevPrompt,
    setprevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    isLoading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  console.log(resultData, "resultData");

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
        {!showResult ? (
          <>
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
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img
                src="https://i.pinimg.com/1200x/9b/32/a5/9b32a523413ec60c2e1821f82333ff6b.jpg"
                alt=""
                className="profile-img"
                width={70}
              />
              <div className="question">{recentPrompt}</div>
            </div>
            <div className="result-data">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/343/680/non_2x/chatbot-write-answer-to-messages-in-the-chat-bot-consultant-is-free-to-help-users-in-your-phone-online-vector-cartoon-illustration.jpg"
                alt=""
                className="profile-img"
                width={70}
              />
              {isLoading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <div
                  className="answers"
                  dangerouslySetInnerHTML={{
                    __html: resultData?.replace(
                      /\*\*(.*?)\*\*/g,
                      "<strong>$1</strong>"
                    ),
                  }}
                />
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt hear"
              onChange={(event) => setInput(event.target.value)}
              value={input}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  onSent();
                }
              }}
            />
            <div>
              <MdOutlineAddPhotoAlternate className="icon" />
              <FaMicrophone className="icon" />
              <IoSend className="icon" onClick={() => onSent()} />
            </div>
          </div>
          <div className="bottom-info">
            Ohoo.. may display enaccurate info. includingabout people, so
            double-checkits response. Your privacy and Ohoo.. Apps
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
