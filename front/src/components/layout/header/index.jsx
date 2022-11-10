import cx from 'classnames';
import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import paths from '../../../pages/paths';
import avatar from '../../../assets/images/avatar.png';

const IconLogout = () => {
  return (
    <svg
      width='122'
      height='130'
      viewBox='0 0 122 130'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styles.logout}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M30.5 21C30.5 9.67815 39.6782 0.5 51 0.5H101C112.322 0.5 121.5 9.67816 121.5 21V109C121.5 120.322 112.322 129.5 101 129.5H51C39.6782 129.5 30.5 120.322 30.5 109V85.3947H35.5V109C35.5 117.56 42.4396 124.5 51 124.5H101C109.56 124.5 116.5 117.56 116.5 109V21C116.5 12.4396 109.56 5.5 101 5.5H51C42.4396 5.5 35.5 12.4396 35.5 21V41.3421H30.5V21Z'
        fill='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M61.8579 47.3226L77.7678 63.2325C78.7441 64.2088 78.7441 65.7917 77.7678 66.768L61.8579 82.6779C60.8816 83.6542 59.2986 83.6542 58.3223 82.6779C57.346 81.7016 57.346 80.1187 58.3223 79.1424L69.9645 67.5002H0V62.5002H69.9645L58.3223 50.8581C57.346 49.8818 57.346 48.2989 58.3223 47.3226C59.2986 46.3463 60.8816 46.3463 61.8579 47.3226Z'
        fill='white'
      />
    </svg>
  );
};

const LayoutHeader = ({ width }) => {
  return (
    <div
      className={cx({
        [styles.layoutHeaderContainer]: true,
      })}
    >
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          <Link to={paths.specialists} className={styles.link}>
            Специалисты
          </Link>
          <Link to={paths.management} className={styles.link}>
            Управление
          </Link>
          <Link to={paths.other} className={styles.link}>
            Контакты
          </Link>
        </div>
        <div className={styles.userContainer}>
          <div className={styles.userNameContainer}>
            <p className={styles.name}>Иванов И. И.</p>
            <p className={styles.role}>Администратор</p>
          </div>
          <img className={styles.avatar} src={avatar} />
          <IconLogout />
        </div>
      </div>
    </div>
  );
};

export default LayoutHeader;
