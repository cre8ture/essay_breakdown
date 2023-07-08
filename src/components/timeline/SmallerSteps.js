import React, { useState } from "react";

function DynamicTextArea({ setNewPlan }) {
  const [textAreas, setTextAreas] = useState([""]);

  const addTextArea = () => {
    setTextAreas([...textAreas, ""]);
  };

  const removeTextArea = (index) => {
    const updatedTextAreas = [...textAreas];
    updatedTextAreas.splice(index, 1);
    setTextAreas(updatedTextAreas);
  };

  const handleTextAreaChange = (index, value) => {
    const updatedTextAreas = [...textAreas];
    updatedTextAreas[index] = value;
    setTextAreas(updatedTextAreas);
    setNewPlan(textAreas);
  };

  // const handleTextAreaChange = (index, value) => {
  //   const updatedTextAreas = [...textAreas];
  //   updatedTextAreas[index] = value;
  //   setTextAreas(updatedTextAreas);
  //   setTimeout(() => {
  //     setNewPlan(textAreas);
  //   }, 3000);
  // };

  return (
    <div className="p-5">
      {textAreas.map((text, index) => (
        <div key={index}>
          <textarea
            className="border-dotted border-2 border-indigo-600"
            value={text}
            onChange={(e) => handleTextAreaChange(index, e.target.value)}
            style={{ width: "90%" }}
            placeholder="write smaller sub-steps"
          />
          <button
            className="border-double border-4 border-indigo-600 mb-3"
            onClick={() => removeTextArea(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="border-double border-4 border-indigo-600 "
        onClick={addTextArea}
      >
        Add
      </button>
    </div>
  );
}

export default DynamicTextArea;
