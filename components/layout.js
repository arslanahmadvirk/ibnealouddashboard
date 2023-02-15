import React from "react";
import MainMenu from "./main-menu";
import UserHeader from "./userheader";

function Layout(props) {
  return (
    <div>
      <div className="flex h-screen w-screen flex-row bg-white font-inter">
        <MainMenu />
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
