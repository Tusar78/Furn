import React, { useState } from "react";
import {
  RiCloseLine,
  RiSettings4Line,
  RiShoppingCartLine,
  RiSearchLine,
} from "react-icons/ri";

// Connect Navbar CSS
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  console.log(search);

  return (
    <section className="navigation section">
      <div className={search ? 'navigation__search--show' : 'navigation__search'}>
        <div className="search custom-container">
          <div className="search__btn">
            <RiSearchLine className="search--icon" />
          </div>
          <div className="search__filled">
            <input type="text" placeholder="Search" className="search__filled-text" />
          </div>
          <div className="search__close" onClick={() => setSearch(!search)}>
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
            <li className="attributes__item" onClick={() => setSearch(!search)}>
              <RiSearchLine className="attributes--search" />
            </li>
            <li className="attributes__item">
              <RiSettings4Line className="attributes--setting" />
            </li>
            <li className="attributes__item">
              <RiShoppingCartLine className="attributes--cart" />
              <span className="attributes__count">0</span>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
