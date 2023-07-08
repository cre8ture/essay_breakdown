import React from "react";
import { useDragControls, motion } from "framer-motion";

function ColoredString({ text, color }) {
  console.log("text", text);
  const controls = useDragControls();
  const containerVariants = {
    initial: { scale: 0.9, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)" },
    hover: {
      scale: 1.5,
      fontSize: "20px",
      padding: "5px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
    }
  };
  function startDrag(event) {
    controls.start(event);
  }
  const textVariants = {
    initial: { color: "black" },
    hover: { color, scale: 1.1 }
  };

  // Custom function to darken the color
  function darkenColor(inputColor, amount) {
    const hexColor = inputColor.replace("#", ""); // Remove the "#" symbol if present
    const numColor = parseInt(hexColor, 16); // Convert the hexadecimal color to a number
    const darkenedNumColor = (numColor >> 1) & 0x7f7f7f; // Darken the color by bitwise shifting and masking
    const darkenedHexColor = darkenedNumColor.toString(16).padStart(6, "0"); // Convert the darkened color back to hexadecimal
    return `#${darkenedHexColor}`; // Return the darkened color with the "#" symbol
  }

  const darkenedColor = darkenColor(color, 0.2); // Darken the color by 20% (adjust the amount as desired)
  var highlightColor;
  if (color === "red") {
    highlightColor = "yellow";
  }
  return (
    <div style={{ display: "inline" }}>
      {/* <div onPointerDown={startDrag} /> */}

      <motion.div
        className="container"
        initial="initial"
        whileHover="hover"
        variants={containerVariants}
        // drag
        // dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        style={{ display: "inline" }}
      >
        <motion.span style={{ display: "inline" }} variants={textVariants}>
          {color === "red" ? (
            <span className="border-solid  ml-4 p-3 border-2 border-sky-500">
              {text}
            </span>
          ) : (
            text
          )}
        </motion.span>
      </motion.div>
    </div>
  );
}

export default ColoredString;
