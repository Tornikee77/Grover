import styles from "./Delivery.module.css";
const Delivery = () => {
  return (
    <div className={styles.homeDeliveryContainer}>
      <section>
        <div className={styles.leftSide}>
          <h4>HOME DELIVERY</h4>
          <h2>Sit at Home We Will Take Care Your Order</h2>
          <p className={styles.redP}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
          </p>
          <button className={styles.redBtn}>Explore Now</button>
        </div>
        <div className={styles.righSide}>
          <img className={styles.chief} src="./img/png/chief.png" alt="" />
          <div className={styles.deliveryContainer}>
            <img
              className="bike"
              src="./img/svg/bikeDelivery.svg"
              alt="Bike Delivery"
            />
            <h2>Bike Delivery</h2>
            <p>Bicycle service ensures that your packages arrive quickly</p>
            <img
              className={styles.cupHead}
              src="./img/svg/cuphead.svg"
              alt="cuphead"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;
