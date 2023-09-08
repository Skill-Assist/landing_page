import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <div className={styles.contentContainer}>
      {props.isLoading ? (
        <Skeleton
          width={50}
          height={50}
          style={
            typeof window !== 'undefined' && window.innerWidth > 400
              ? { marginLeft: '50px' }
              : {}
          }
        />
      ) : (
        <div className={styles.imgContainer}>
          <img src="/logo.png" alt="header_logo" />
        </div>
      )}
      {!props.isMobile && (
        <div className={styles.actionContainer}>
          {props.isLoading ? (
            <Skeleton width={73} height={37} style={{ margin: '0 20px' }} />
          ) : (
            <a
              href={process.env.NEXT_PUBLIC_LOGIN_URL}
              target="_blank"
              className={styles.login}
            >
              Login
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
