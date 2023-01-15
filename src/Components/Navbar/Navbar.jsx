import React from "react";
import {
  RiCloseLine,
  RiSettings4Line,
  RiShoppingCartLine,
  RiSearch2Line,
} from "react-icons/ri";

// Connect Navbar CSS
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navigation section">
      <div className="navigation__search">
        <div className="search custom-container">
          <div className="search__btn">
            <RiSearch2Line className="search--icon" />
          </div>
          <div className="search__filled">
            <input type="text" placeholder="Search" className="search__filled-text" />
          </div>
          <div className="search__close">
            <RiCloseLine className="search--icon" />
          </div>
        </div>
      </div>
      <nav className="nav custom-container">
        <a href="/" className="nav__brand">
          Furn
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
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
            <li className="attributes__item">
              <RiSearch2Line className="attributes--search" />
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
    </section>
  );
};

export default Navbar;
