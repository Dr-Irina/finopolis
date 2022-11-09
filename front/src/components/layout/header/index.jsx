import cx from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';
import paths from "../../../pages/paths";
import avatar from '../../../assets/images/avatar.png';

const LayoutHeader = ({ width }) => {

    return (
        <div
            className={cx({
                [styles.layoutHeaderContainer]: true,
            })}
        >
            <div className={styles.container}>
                <div className={styles.linksContainer}>
                    <Link to={paths.specialists} className={styles.link}>Специалисты</Link>
                    <Link to={paths.management} className={styles.link}>Управление</Link>
                    <Link to={paths.other} className={styles.link}>Контакты</Link>
                </div>
                <div className={styles.userContainer}>
                    <div className={styles.userNameContainer}>
                        <p className={styles.name}>Иванов И. И.</p>
                        <p className={styles.role}>Администратор</p>
                    </div>
                    <img className={styles.avatar} src={avatar}/>
                </div>
            </div>
        </div>
    );
};

export default LayoutHeader;
