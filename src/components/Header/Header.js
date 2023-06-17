import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.imgContainer}>
        <img src="/logo.png" alt="header_logo"/>
        <p>Skill Assist</p>
      </div>
      <div className={styles.actionContainer}>
        {/* <button className={styles.register}>Signup</button> */}
        <a href="http://localhost:3000/login" target="_blank" className={styles.login} >Login</a>
      </div>
    </div>
  );
};

export default Header;
