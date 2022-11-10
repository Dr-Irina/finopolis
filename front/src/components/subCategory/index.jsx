import React from 'react';
import styles from './styles.module.scss';
import cx from 'classnames';
import {useHistory} from "react-router-dom";
import { reverse } from "named-urls";
import paths from "../../pages/paths";
import {Tooltip} from "antd";

const SubCategory = ({category, index, create = false}) => {
    const history = useHistory();
    return (
        <div
            className={cx({
                [styles.container]: true,
                [styles.dark]: index % 3 === 0,
                [styles.mid]: index % 3 === 1,
                [styles.light]: index % 3 === 2,
                [styles.createContainer]: create
            })}
            onClick={() => create ? console.log('create') : history.push(reverse(paths.subCategoryInfo, {id: category.id, subId: category.subId}))}
        >
            {!create &&
                <>
                    <div className={styles.titleContainer}>
                        <p className={styles.title}>{category.name}</p>
                        <p className={styles.counter}>100</p>
                    </div>
                    {category.description && <p className={styles.description}>{category.description}</p>}
                </>
            }
            {create && <span>+</span>}
            {!create && <Tooltip
                title={<div className={styles.actionContainer}>
                    <p className={styles.actionHeader}>Управление подкатегорией</p>
                    <p className={styles.actionRow}>Редактировать</p>
                    <p className={styles.actionRow}>Назначить технических специалистов</p>
                    <p className={styles.actionRow}>Удалить</p>
                </div>} color={'rgba(187, 243, 255, 0.9)'}>
                <p className={styles.action}>...</p>
            </Tooltip>}
        </div>
    );
}

export default SubCategory;
