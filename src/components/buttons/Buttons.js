import React, { useState, useEffect } from "react";
import { RiFileCopyLine, RiDownloadLine, RiShareLine } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";

const PlanActions = ({ plan }) => {
  const [clickedButton, setClickedButton] = useState(null);

  const copyToClipboard = () => {
    const copiedText = plan.join("\n");
    navigator.clipboard.writeText(copiedText);
    alert("Plan copied to clipboard!");
    setClickedButton("copy");
    setTimeout(() => {
      setClickedButton(null);
    }, 500);
  };

  const downloadAsTextFile = () => {
    const text = plan.join("\n");
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "plan.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setClickedButton("download");
    setTimeout(() => {
      setClickedButton(null);
    }, 500);
  };

  const shareByEmail = () => {
    const subject = encodeURIComponent("Your Plan");
    const body = encodeURIComponent(plan.join("\n"));
    window.open(`mailto:?subject=${subject}&body=${body}`);
    setClickedButton("share");
    setTimeout(() => {
      setClickedButton(null);
    }, 500);
  };

  return (
    <div className="flex mt-5 flex-col items-end">
      <div className="flex justify-end">
        <button
          className={`p-2 rounded transition duration-300 ${
            clickedButton === "copy"
              ? "bg-gray-200"
              : "bg-white hover:bg-gray-200"
          }`}
          onClick={copyToClipboard}
        >
          {clickedButton === "copy" ? (
            <FcCheckmark className="text-black" />
          ) : (
            <RiFileCopyLine className="text-black" />
          )}
        </button>
        <button
          className={`p-2 rounded transition duration-300 ${
            clickedButton === "download"
              ? "bg-gray-200"
              : "bg-white hover:bg-gray-200"
          }`}
          onClick={downloadAsTextFile}
        >
          {clickedButton === "download" ? (
            <FcCheckmark className="text-black" />
          ) : (
            <RiDownloadLine className="text-black" />
          )}
        </button>
        <button
          className={`p-2 rounded transition duration-300 ${
            clickedButton === "share"
              ? "bg-gray-200"
              : "bg-white hover:bg-gray-200"
          }`}
          onClick={shareByEmail}
        >
          {clickedButton === "share" ? (
            <FcCheckmark className="text-black" />
          ) : (
            <RiShareLine className="text-black" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PlanActions;
