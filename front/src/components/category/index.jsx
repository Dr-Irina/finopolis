import React from 'react';
import styles from './styles.module.scss';
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
import { reverse } from 'named-urls';
import paths from '../../pages/paths';

const Category = ({ category, index, className, create = false }) => {
  const history = useHistory();
  return (
    <div
      className={cx(className, {
        [styles.container]: true,
        [styles.dark]: index % 3 === 0,
        [styles.mid]: index % 3 === 1,
        [styles.light]: index % 3 === 2,
        [styles.createContainer]: create,
      })}
      onClick={() =>
        create
          ? console.log('create')
          : history.push(reverse(paths.categoryInfo, { id: category.id }))
      }
    >
      {!create && (
        <>
          <div className={styles.titleContainer}>
            <p className={styles.title}>{category.name}</p>
            <p className={styles.counter}>100</p>
          </div>
          {category.description && (
            <p className={styles.description}>{category.description}</p>
          )}
        </>
      )}
      {create && <span>+</span>}
    </div>
  );
};

export default Category;
