import React from "react";
import men from '../../assets/images/men.svg';
import styles from './styles.module.scss';
import cx from 'classnames';
import dots from '../../assets/images/dots.png';
import {useHistory} from "react-router-dom";
import {reverse} from "named-urls";
import paths from "../../pages/paths";
import {Tooltip} from "antd";

const Report = ({report, index}) => {
    const history = useHistory();
    return (
        <div
            className={cx({[styles.container]: true,
                [styles.dark]: index % 3 === 0,
                [styles.light]: index % 3 === 1,
                [styles.medium]: index % 3 === 2,
                [styles.closeContainer]: report.status.toLowerCase() === 'закрыто'
            })}
            onClick={() => history.push(reverse(paths.reportDetails, {id: report.categoryId, subId: report.subCategoryId, reportId: report.id}))}
        >
            <img src={men} className={styles.avatar} />
            <div>
                <div className={styles.headerContainer}>
                    <p className={styles.name}>Иванов И. И.</p>
                    <p className={cx({
                        [styles.newStatus]: report.status.toLowerCase() === 'новое',
                        [styles.inProgress]: report.status.toLowerCase() === 'на рассмотрении',
                        [styles.cancel]: report.status.toLowerCase() === 'отклонено',
                        [styles.close]: report.status.toLowerCase() === 'закрыто',
                    })}>{report.status}</p>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.text}>Текст обращения текст обращения текст обращения текст обращения текст обращения текст обращения текст обращения текст обращения
                        Текст обращения текст обращения текст обращения текст обращения текст обращения текст обращения текст обращения текст обращения текст ...
                    </p>
                </div>
            </div>
            <Tooltip
                arrowPointAtCenter
                title={<div className={styles.actionContainer}>
                    <p className={styles.actionHeader}>Управление обращением</p>
                    <p className={styles.actionRow}>Рассмотреть</p>
                    <p className={styles.actionRow}>Переназначить</p>
                    <p className={styles.actionRow}>Закрыть</p>
                    <p className={styles.actionRow}>Отклонить</p>
                </div>} color={'rgba(187, 243, 255, 0.9)'}>
                <img src={dots} className={styles.dots} />
            </Tooltip>
        </div>
    );
}

export default Report;
