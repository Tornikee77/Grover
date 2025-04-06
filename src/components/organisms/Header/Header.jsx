import React from "react";
import styles from "./Header.module.css";
// import Logo from "./";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <a href="#">
              {" "}
              <img src="/img/svg/siteLogo.svg" alt="siteLogo" />
            </a>
          </div>
          <div className={styles.navBar}>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.searchInput}>
            <div>
              <input
                className={styles.search}
                type="search"
                placeholder="Search"
              />
            </div>
            <img
              className={styles.searchLogo}
              src="/img/svg/search.svg"
              alt="search"
            />
            <div className={styles.cartContainer}>
              <img
                className={styles.cartIcon}
                src="/img/svg/cartIcon.svg"
                alt="cart
              "
              />
              <div className={styles.counter}>1</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
