import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <a href="#" className="logo">
            <img src="/img/svg/siteLogo.svg" alt="Grover" />
          </a>
          <p>
            Fast delivery, which is active all over the world, serves with many
            transportation vehicles.
          </p>
        </div>

        <div className={styles.footerMiddle}>
          <div className={styles.ulContainer}>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">All Products</a>
              </li>
              <li>
                <a href="#">Locations Map</a>
              </li>
            </ul>
          </div>
          <div className={styles.ulContainer}>
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Order tracking</a>
              </li>
              <li>
                <a href="#">Wish List</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.getInTouch}>
          <h3>Get in Touch</h3>
          <p>
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>All Rights Reserved @ BESNIK 2021</p>
        <div className={styles.legal}>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy & Policy</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
