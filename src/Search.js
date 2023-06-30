import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type={Text} placeholder="Enter a city ..." />
        <button> Search</button>
      </form>
    </div>
  );
}
