import Header from "../Header/Header";
import styles from "./hero.module.css";
import strawberrysmall from "../../../../public/img/png/smallstrawberry.png";
import orange from "../../../../public/img/png/orange.png";
import chieffguy from "../../../../public/img/png/chieffguy.png";
import alarmclock from "../../../../public/img/svg/alarm-clock-icon.svg";
import addtocart from "../../../../public/img/svg/cartwithplus.svg";

const Hero = () => {
  return (
    <section className={styles.onlybg}>
      <div className={styles.herosec}>
        <Header />
        <div className={styles.leftandright}>
          <div className={styles.leftdiv}>
            <div className={styles.textdiv}>
              <div className={styles.smallSTbox}>
                <span>More than Faster</span>
                <img src={strawberrysmall} alt="" />
              </div>
              <h1>
                Groceries delivered in as little as{" "}
                <span className={styles.time}>2 hours</span>
              </h1>
              <p>
                Grocen atssures fresh grocery every morning to your family
                without getting out in this pandemic.
              </p>
            </div>
            <div className={styles.btndiv}>
              <button className={styles.btnone}>Order Now</button>
              <button className={styles.btntwo}>
                <img src="/img/svg/playbtn.svg" alt="PlayButton" />
              </button>
              <span>Order Process</span>
            </div>
          </div>
          <div className={styles.rightdiv}>
            <div className={styles.divforpositioning}>
              <div className={styles.freshorange}>
                <img src={orange} alt="fresh orange" />
                <div className={styles.nameplate}>
                  <h4>Fresh Orenge</h4>
                  <div></div>
                </div>
                <div className={styles.orangeprice}>
                  <h2>$44.60</h2>
                  <span>Free Shipping</span>
                </div>
              </div>
              <div className={styles.addtocart}>
                <img src={addtocart} alt="add to cart" />
              </div>
            </div>
            <img src={chieffguy} alt="chieff" />
            <div className={styles.diliverytime}>
              <div>
                <img src={alarmclock} alt="clock" />
              </div>
              <div className={styles.diliverytext}>
                <h4>Dilivery</h4>
                <span>30 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
