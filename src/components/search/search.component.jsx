import React from "react";
import "./search.styles.css";

export const Search = (props) => {
  return (
    <input
      className="search"
      name="pattern"
      type="text"
      placeholder={props.placeholder || ""}
      value={props.searchPattern || ""}
      onInput={(e) => props.onInput(e.target.value)}
    />
  );
};
