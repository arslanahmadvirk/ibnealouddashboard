import React from "react";

function Card(props) {
  return (
    <div
      className={
        "rounded-lg bg-white p-6 pb-[18px] drop-shadow-card " +
        (props.className || "")
      }
    >
      {props.children}
    </div>
  );
}

export default Card;
