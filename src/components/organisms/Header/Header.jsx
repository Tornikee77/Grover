import React from "react";
import styles from "./Header.module.css";
// import Logo from "./";

const Header = () => {
  return (
    <div>
      <div className="mainContainer">
        <header>
          <div className={styles.HeaderContainer}>
            <div className={styles.logoContainer}>
              <img src="/img/svg/siteLogo.svg" alt="siteLogo" />
            </div>
            <div className={styles.navBar}>
              <nav>
                <ul>
                  <li>Home</li>
                  <li>Menu</li>
                  <li>Service</li>
                  <li>Shop</li>
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
                alt=""
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
      </div>
    </div>
  );
};

export default Header;
