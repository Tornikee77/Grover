import styles from "./DownloadOurApp.module.css";

const DownlaodOurApp = () => {
  return (
    <div>
      <div className={styles.appMainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.appPhotoContainer}>
            <img
              className={styles.phonePhoto}
              src="/img/png/phonePhoto.png"
              alt="phonePhoto"
            />
          </div>
          <div className={styles.appInfoContainer}>
            <p className={styles.appContainerTitle}>Download our app</p>
            <h3>Get the Groceries app order more easily.</h3>
            <p className={styles.appDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <div className={styles.AppButtonContainer}>
              <button className={styles.appStore}>
                <img src="/img/svg/appStore.svg" alt="appStore" />
                <p>App Store</p>
              </button>
              <button className={styles.playStore}>
                <img src="/img/svg/playStore.svg" alt="playStore" />
                <p>Play Store</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownlaodOurApp;
