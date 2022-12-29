import React from "react";
import Sidebar from "./SideBar";
import "./SidebarLayout.css";

const SidebarLayout = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};
export default SidebarLayout;
