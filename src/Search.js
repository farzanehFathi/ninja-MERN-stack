import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="Text" placeholder="Enter a city ..." />
        <input type="submit" value="Search" className="btn btn-primary" />
        <button className="float-left btn btn-success"> Current </button>
      </form>
    </div>
  );
}
