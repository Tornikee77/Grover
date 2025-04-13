import React from "react";
import styles from "./WeServe.module.css";
import FreeCarIcon from "../../../../public/img/svg/freecaricon.svg";
import CashIcon from "../../../../public/img/svg/CashIcon.svg";
import SecureIcon from "../../../../public/img/svg/SecureIcon.svg";

const WeServe = () => {
  return (
    <section className={styles.weservesec}>
      <div className={styles.toptext}>
        <span>What we Serve</span>
        <h1>Fruit And Vegetable Delivered To Your Home</h1>
      </div>
      <div className={styles.cardbox}>
        <div className={styles.cards}>
          <img src={FreeCarIcon} alt="Free shipping" />
          <div className={styles.cardstext}>
            <h1>Free shipping</h1>
            <span>Enjoy Order in a hand using the fresness of groceries</span>
          </div>
        </div>
        <div className={styles.cards}>
          <img src={CashIcon} alt="15 days returns" />
          <div className={styles.cardstext}>
            <h1>15 days returns</h1>
            <span>
              Order in a handy way using the freshness of the groceries.
            </span>
          </div>
        </div>
        <div className={styles.cards}>
          <img src={SecureIcon} alt="Secure checkout" />
          <div className={styles.cardstext}>
            <h1>Secure checkout</h1>
            <span>If you get rotten items - return immediately to us.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeServe;
