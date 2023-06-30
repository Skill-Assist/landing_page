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
        <a href={process.env.NEXT_PUBLIC_LOGIN_URL} target="_blank" className={styles.login} >Login</a>
      </div>
    </div>
  );
};

export default Header;
