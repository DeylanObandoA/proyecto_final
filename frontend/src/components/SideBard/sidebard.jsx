import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function alternatingSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button onClick={alternatingSidebar}>Toggle Sidebar</button>
      <p>Content goes here</p>
    </div>
  );
};

export default Sidebar;