import React, { useState } from "react";

const TextAreaComponent = ({ setIsAnalyzed, setTextArr2 }) => {
  const [text, setText] = useState("");
  const [textArr, setTextArr] = useState("");
  const [isLabelVisible, setIsLabelVisible] = useState(false);

  const handleChange = (event) => {
    const updatedText = event.target.value;
    setText(updatedText);
    createPlan(updatedText);
    setTextArr2(textArr);
    setIsLabelVisible(updatedText.length > 0);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsAnalyzed(true);
    }
  };

  const createPlan = (updatedText) => {
    const sentences = updatedText.split(/(?<=[.!?]) +/);
    setTextArr(sentences);
  };

  const analyze = (updatedText) => {
    setIsAnalyzed(true);
  };

  return (
    <div className="p-4">
      {isLabelVisible && (
        <label htmlFor="assignmentDirections" className="text-lg font-bold">
          <code>Input assignment directions</code>
        </label>
      )}
      <textarea
        id="assignmentDirections"
        className="w-full h-32 p-2 mt-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring focus:border-blue-300"
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Input assignment directions"
      />
      <button
        className="px-4 py-2 mt-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={() => analyze(text)}
      >
        Create Plan
      </button>
    </div>
  );
};

export default TextAreaComponent;
