import React from "react";
import { CiSearch, CiSettings, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <nav className="nav section">
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
              <CiSearch className="attributes--search" />
            </li>
            <li className="attributes__item">
              <CiSettings className="attributes--setting" />
            </li>
            <li className="attributes__item">
              <CiShoppingCart className="attributes--cart" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
