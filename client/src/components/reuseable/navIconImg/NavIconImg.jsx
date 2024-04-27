import React from "react";

export default function NavIconImg({ item }) {
  return (
    <img
      src={item}
      style={{
        width: "20px",
        height: "20px",
        display: "inline-block",
        marginRight: "7px",
        objectFit: "contain",
      }}
      alt="Icon image"
    />
  );
}
