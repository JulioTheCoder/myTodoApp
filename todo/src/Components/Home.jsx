import React from "react";
import Nav from "./Nav";
import Sidebar from "./SideBar";

export default function Home () {
  return(
    <div className="home">
      <Nav/>
      <Sidebar/>
    </div>
  )
}