import React, { useRef } from "react";

const Micro = () => {
  const microRef = useRef(null);

  function handleDown(fieldX, fieldY) {
    microRef.current.style.position = "absolute";
    moveAt(fieldX, fieldY)
    document.body.appendChild(microRef.current)
  }

  function moveAt(fieldX, fieldY) {
    microRef.current.style.left = fieldX - microRef.current.offsetWidth + "px";
    microRef.current.style.top = fieldY - microRef.current.offsetHeight + "px";
  }

  return (
    <img
      ref="microRef"
      onMouseDown={handleDown}
      src={require("./ball.jpg")}
      alt=""
      width={50}
      height={50}
    />
  );
};

export default Micro;
