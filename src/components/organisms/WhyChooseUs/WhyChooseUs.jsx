import React from "react";
import styles from "./WhyChooseUs.module.css";
import CitrusVision from "../../../../public/img/png/CitrusVision.png"
import strawberry  from "../../../../public/img/png/strawberry.png"
import starsvg from "../../../../public/img/svg/star.svg"
import plusvg from "../../../../public/img/svg/plus.svg"


const WhyChooseUs = () => {
  return (
    <section className={styles.WhyChooseUssec}>
      <div className={styles.leftdiv}>
        <div>
            <img src={CitrusVision} alt="" />
            <div className={styles.strawberrycard}>
                <div className={styles.cardtitle}>
                    <h1>Melting Cheese</h1>
                    <span>Red Stovery</span>
                </div>
                <img src={strawberry} alt="" />
                <div className={styles.pricediv}>
                    <div className={styles.ratediv}>
                        <img src={starsvg} alt="" />
                        <span>3.8</span>
                    </div>
                    <div className={styles.addcart}>
                        <span>$49.66</span>
                        <button><img src={plusvg} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className={styles.rightdiv}>
        <div className={styles.titles}>
          <h1>WHY CHOOSE US</h1>
          <h2>Find Favorites and Discover New Ones</h2>
        </div>
        <div className={styles.explore}>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus
            blanditiis praesen voluptatum deleniti.
          </p>
          <button>Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
