import React from "react";
import { NavLink } from "react-router-dom";
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.nav}>
      <span className="nav_brand">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.nav_brand_active : styles.nav_brand)}
        >
          Rohit Jha
        </NavLink>
      </span>
      <span className={styles.nav_array}>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? styles.nav_array_active : styles.nav_items)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.nav_array_active : styles.nav_items)}
        >
          About
        </NavLink>
      </span>
    </ div >
  );
}

export default Header;