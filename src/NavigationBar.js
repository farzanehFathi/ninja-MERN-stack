import React from "react";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <div className="NavigationBar">
      <ul>
        {" "}
        <a href="/">
          <li> Paris</li>
        </a>
        <a href="/">
          <li> Tokyo</li>
        </a>
        <a href="/">
          <li> Sydney</li>
        </a>
        <a href="/">
          <li> Toronto</li>
        </a>
      </ul>
    </div>
  );
}
