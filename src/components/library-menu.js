import React from 'react';
import {Link, Route} from 'react-router-dom'

const MenuLink = ({label, to, activeOnlyWhenExact}) => (<Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
  <div className={match
    ? 'menu__link _active'
    : 'menu__link'}>
    <Link to={to}>{label}</Link>
  </div>
)}/>)

const LibraryMenu = ({data}) => {
  return (
    <div className="menu">
      <div className="menu__wrapper">
        <MenuLink activeOnlyWhenExact={true} to="/" label="Главная"/>
        <MenuLink to="/Books" label="Книги"/>
        <MenuLink to="/Journals" label="Журналы"/>
        <MenuLink to="/Booklets" label="Буклеты"/>
      </div>
    </div>
  )
}

export default LibraryMenu
