import React from "react";
import ReactDOM from "react-dom";
// import ColoredString from "./components/texts/TextHighlights";
import "./styles.css";
// import Draggable from "react-draggable";
import ThreeCols from "./components/layout/ThreeCols";
function App() {
  return (
    <div className="App">
      <ThreeCols />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
