import React from "react";

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
            <li className="attributes__item attributes--search">
              
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
