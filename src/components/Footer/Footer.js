import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* <div className={styles.logoWrapper}>
          <div>
            <img src="/logo.png" alt="footer_logo"/>
          </div>
        </div> */}
        <button onClick={props.onClick}>Lista de espera</button>
      </div>
      <p>© Skill Assist Ltda.</p>
    </div>
  );
};

export default Footer;
