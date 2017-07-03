import React from "react";
import { Link, Route } from "react-router-dom";

const MenuLink = ({ label, to, activeOnlyWhenExact }) =>
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) =>
      <div className={match ? "menu__link _active" : "menu__link"}>
        <Link to={to}>
          {label}
        </Link>
      </div>}
  />;

export default MenuLink;
