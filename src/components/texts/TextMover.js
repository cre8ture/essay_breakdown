import React, { useEffect, useState } from "react";

const TransitionComponent = ({ children, isClicked, index, setIsClicked }) => {
  const [transitioned, setTransitioned] = useState(false);
  const [hoverState, setHoverState] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    if (isClicked === index) {
      setIsClicked(-1);
    } else {
      setIsClicked(index);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setTransitioned(true);
    }, 500);
  }, []);

  const handleHover = () => {
    setHoverState(true);
  };

  const handleMouseLeave = () => {
    setHoverState(false);
  };

  return (
    <div
      className={`transition-all duration-1000 ease-in-out transform p-5 ${
        transitioned && "translate-x-10 translate-y-3 text-xl ml-15"
      } ${(hoverState || isClicked === index) && "scale-110"}`}
      style={{ flex: "1", minWidth: "0", overflowWrap: "break-word" }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <p
        className="hover:scale-150"
        onClick={handleClick}
        style={{ display: "inline" }}
      >
        {children}
      </p>
    </div>
  );
};

export default TransitionComponent;
