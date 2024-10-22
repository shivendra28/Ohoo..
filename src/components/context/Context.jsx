import { createContext, useState } from "react";
import runChat from "../config/gemini";


export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setprevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async () => {
    setResultData("");
    setIsLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setInput("");
    const response = await runChat(input);
    if (response) {
      setResultData(response);
      setIsLoading(false);
      setInput("");
    }
  };
  const contextValue = {
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
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
