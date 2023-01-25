import React from 'react';
import s from "./styles/SideBar.module.css"; // importando hoja de estilo

const Sidebar = () => {
  return (
    <div className={s.Sidebar}>
      <h2>Menú</h2>
      <ul>
        <li><a href="/">Hoy</a></li>
        <li><a href="/">Planes</a></li>
        <li><a href="/">FeedBack</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;