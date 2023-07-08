import React, { useState, useEffect } from "react";
import TempTextMover from "../texts/TempTextMover";
import Textarea from "../inputs/Texrarea";
import HighlightSentence from "../texts/TempEssayQ";
import EssayBreakdown from "../headings/Heading";
import StatCard from "../stats/StatCard2";
import Buttons from "../buttons/Buttons";

const FlexWithResizer = () => {
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [textArr2, setTextArr2] = useState([]);
  const [allPlans, setAllPlans] = useState([]);
  const [newPlan, setNewPlan] = useState([]);

  function reset() {
    setTextArr2([]);
    setAllPlans([]);
    setNewPlan([]);
  }

  useEffect(() => {
    setAllPlans((prevPlans) => [...textArr2, ...prevPlans, ...newPlan]);
  }, [newPlan, textArr2]);

  const handleResize = (e) => {
    const resizer = document.getElementById("dragMe");
    const container = resizer.parentNode;
    const leftElement = container.firstChild;
    const rightElement = container.lastChild;
    const containerWidth = container.offsetWidth;
    const mouseX = e.clientX;

    const leftWidth = mouseX;
    const rightWidth = containerWidth - mouseX;

    leftElement.style.width = `${leftWidth}px`;
    rightElement.style.width = `${rightWidth}px`;
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Left element */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <EssayBreakdown />
        {!isAnalyzed && (
          <Textarea setTextArr2={setTextArr2} setIsAnalyzed={setIsAnalyzed} />
        )}
        <br />
        {textArr2.length > 0 && (
          <button
            className="bg-blue-500 mx-auto my-4 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            style={{ width: "100px" }}
            onClick={reset}
          >
            Reset
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </button>
        )}
        {textArr2.length > 0 && <HighlightSentence textArr2={textArr2} />}
        <br />
        {isAnalyzed && (
          <TempTextMover
            setIsAnalyzed={setIsAnalyzed}
            sents={textArr2}
            setNewPlan={setNewPlan}
          />
        )}
        {isAnalyzed && <Buttons plan={allPlans} />}
      </div>

      <div style={{ flex: "2 0 auto", maxWidth: "66.67%" }}></div>
      {/* The resizer */}
      <div
        className="resizer"
        id="dragMe"
        style={{
          width: "1px",
          cursor: "col-resize",
          border: "1px dotted black",
          marginLeft: "4px",
          marginRight: "4px"
        }}
        onMouseDown={(e) => {
          document.addEventListener("mousemove", handleResize);
          document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", handleResize);
          });
        }}
      />
      {/* Right element */}
      <div style={{ flex: "1 0 auto", maxWidth: "33.33%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StatCard sentences={textArr2} />
        </div>
      </div>
    </div>
  );
};

export default FlexWithResizer;
