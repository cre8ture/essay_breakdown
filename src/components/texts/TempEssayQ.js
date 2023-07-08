import React from "react";
import ColoredString from "./TextHighlights";
// import "./styles.css";
import Draggable from "react-draggable";

export default function App({ textArr2 }) {
  return (
    <div className="ml-3 rounded-br border-l border-dashed border-black p-3 border-1">
      <code className="text-l text-mono font-bold">
        Drag, reorder and review the directions
      </code>
      <div className="paragraph">
        <div style={{ maxWidth: "80%" }}>
          {textArr2.map((sentence, index) => (
            <Draggable key={index}>
              <div className="mr-3 space-2 p-3">
                <ColoredString
                  text={sentence}
                  color={sentence.endsWith("?") ? "red" : getRandomColor()}
                />
              </div>
            </Draggable>
          ))}
        </div>
      </div>
    </div>
  );
}

const getRandomColor = () => {
  const colors = [
    "blue",
    "green",
    "azure",
    "purple",
    "orange",
    "indigo",
    "teal"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
