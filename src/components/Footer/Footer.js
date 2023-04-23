import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.logoWrapper}>
        <div>
          <img src="/logo.png" />
        </div>
        <p>© 2022 Copyright: Skill Assist</p>
      </div>
      <button>
        Entre em contato!
      </button>
    </div>
  );
};

export default Footer;
