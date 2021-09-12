import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <input
        type="text"
        placeholder="Search.."
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
