import React from 'react';
import styles from './styles.module.scss';
import Category from "../../components/subCategory";
import {Breadcrumb} from "antd";

const catMock = {
    id: 1,
    name: 'РКО',
    description: 'Расчетно Кассовое Обслуживание',
    sub: [{
        id: 1,
        name: 'Открытие / закрытие / ведение счета',
        description: ''
    },
        {
            id: 2,
            name: 'Платежи в рублях',
            description: ''
        },
        {
            id: 3,
            name: 'ВЭД и ВК',
            description: 'Внешнеэкономическая жеятельность и валютный контроль'
        }]
}

const SubCategoriesList = () => (
    <div className={styles.content}>
        <Breadcrumb>
            <Breadcrumb.Item>
                <a href="/">Категории</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{catMock.name}</Breadcrumb.Item>
        </Breadcrumb>
        <p className={styles.title}>{catMock.name}</p>
        {catMock.description && <p className={styles.description}>{catMock.description}</p>}
        <div className={styles.container}>
            {catMock.sub.map((item, index) => (<Category key={item.id} category={{...item, subId: catMock.id}} index={index} />))}
            <Category create index={catMock.sub.length} />
        </div>
    </div>
);

export default SubCategoriesList;
