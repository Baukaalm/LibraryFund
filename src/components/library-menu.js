import React from "react";
import MenuLink from './library-menu-link'

const LibraryMenu = ({ data }) =>
  <div className="menu">
    <div className="menu__wrapper">
      <MenuLink activeOnlyWhenExact={true} to="/" label="Главная" />
      <MenuLink to="/Books" label="Книги" />
      <MenuLink to="/Journals" label="Журналы" />
      <MenuLink to="/Booklets" label="Буклеты" />
    </div>
  </div>;

export default LibraryMenu;
