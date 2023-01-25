import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  RiCloseLine,
  RiSettings4Line,
  RiShoppingCartLine,
  RiSearchLine,
  RiMenuLine,
} from "react-icons/ri";

// Connect Navbar CSS
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <motion.section 
      className="navigation section"
      initial={{opacity: 1}}
      scr={{position: "fixed"}}
    >
      <div
        className={search ? "navigation__search--show" : "navigation__search"}
      >
        <div className="search custom-container">
          <div className="search__btn">
            <RiSearchLine className="search--icon" />
          </div>
          <div className="search__filled">
            <input
              type="text"
              placeholder="Search"
              className="search__filled-text"
            />
          </div>
          <div className="search__close" onClick={() => setSearch(!search)}>
            <RiCloseLine className="search--icon" />
          </div>
        </div>
      </div>
      <nav className="nav custom-container">
        <div className="nav__logo">
          {/* =-= Show in Tablet View =-= */}
          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            <RiMenuLine className="nav__toggle--icon" />
          </div>

          <a href="/" className="nav__brand">
            Furn
          </a>
        </div>

        <div className={toggle ? "nav__menu nav__menu--show" : "nav__menu"}>
          <ul className={toggle ? "nav__list nav__list--show" : "nav__list"}>
            {/* =-= In Tablet View =-= */}
            <div className="nav__logo--tablet">
              <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                {toggle ? (
                  <RiCloseLine className="nav__toggle--icon" />
                ) : (
                  <RiMenuLine className="nav__toggle--icon" />
                )}
              </div>

              <a href="/" className="nav__brand">
                Furn
              </a>
            </div>
            {["Home", "Arrivals", "Features", "Blog", "Contact"].map((item) => (
              <li className="nav__item" key={item}>
                <a href={`#${item}`} className="nav__link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__attributes">
          <ul className="attributes__list">
            <li className="attributes__item" onClick={() => setSearch(!search)}>
              <RiSearchLine className="attributes--search" />
            </li>
            <li className="attributes__item">
              <RiSettings4Line className="attributes--setting" />
            </li>
            <li className="attributes__item">
              <RiShoppingCartLine className="attributes--cart" />
              <span className="attributes__count">2</span>
            </li>
          </ul>
        </div>
      </nav>
    </motion.section>
  );
};

export default Navbar;
