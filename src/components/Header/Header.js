import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.imgContainer}>
        <img src="/logo.png" />
        <p>Skill Assist</p>
      </div>
      <div className={styles.actionContainer}>
        <button className={styles.register}>Signup</button>
        <button className={styles.login}>Login</button>
      </div>
    </div>
  );
};

export default Header;
