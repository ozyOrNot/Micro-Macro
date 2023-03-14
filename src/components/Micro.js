import React, { useRef } from "react";

const Micro = () => {
  const microRef = useRef();

  function handleDown(fieldX, fieldY) {
    microRef.current.style.position = "absolute";
    moveAt(fieldX, fieldY)
    document.body.appendChild(microRef.current)
    microRef.current.style.zIndex = 1000;
  }

  function moveAt(fieldX, fieldY) {
    microRef.current.style.left = fieldX - microRef.current.offsetWidth + "px";
    microRef.current.style.top = fieldY - microRef.current.offsetHeight + "px";
  }

  document.onmousemove = function(e){
    moveAt(e);
  }

  return (
    <img
      ref="microRef"
      onMouseDown={handleDown}
      src={require("../img/ball.jpg")}
      alt=""
      width={50}
      height={50}
    />
  );
};

export default Micro;
