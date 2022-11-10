import React from 'react';
import styles from './styles.module.scss';
import Category from '../../components/category';

const catMock = [
  {
    id: 1,
    name: 'РКО',
    description: 'Расчетно Кассовое Обслуживание',
  },
  {
    id: 2,
    name: 'Кредиты',
    description: '',
  },
  {
    id: 3,
    name: 'СДБО',
    description: 'Система Дистанционого Банковского обслуживания',
  },
  {
    id: 4,
    name: 'Бизнес-карта',
    description: '',
  },
  {
    id: 5,
    name: 'Финансовый мониторинг',
    description: '',
  },
  {
    id: 6,
    name: 'Офисы/Банкоматы',
    description: '',
  },
  {
    id: 7,
    name: 'Сайт Банка',
    description: '',
  },
  {
    id: 8,
    name: 'Сайт Банка',
    description: '',
  },
  {
    id: 9,
    name: 'Ex-РГСБ',
    description: '',
  },
  {
    id: 10,
    name: 'Прочие обращения\t',
    description: '',
  },
];

const CategoriesList = () => (
  <div className={styles.container}>
    {catMock.map((item, index) => {
      if (index === catMock.length - 1 && catMock.length % 2 !== 0) {
        return (
          <div className={styles.wrapper}>
            <Category key={item.id} category={item} index={index} />
            <Category
              create
              index={catMock.length}
              className={styles.add_btn}
            />
          </div>
        );
      }
      return <Category key={item.id} category={item} index={index} />;
    })}
    {catMock.length % 2 === 0 && <Category create index={catMock.length} />}
  </div>
);

export default CategoriesList;
