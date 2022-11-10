import React from 'react';
import styles from "../subCategoriesList/styles.module.scss";
import {Breadcrumb, Tabs, Input, Button, Collapse,} from "antd";
import {reverse} from "named-urls";
import paths from "../paths";
import men from '../../assets/images/men.svg';
import repStyles from './styles.module.scss';
import cx from "classnames";
import * as PropTypes from "prop-types";

const mocks = {
    category: {
        id: 1,
        name: "РКО",
    },
    subCategory: {
        id: 2,
        name: 'Платежи в рублях'
    },
    id: 1,
    fullname: 'Иванов И. И.',
    status: 'На рассмотрении',
    text: 'Мне необходимо сделать сделать и оправить срочный\n' +
        'платеж! В тарифах банка данная услуга прописана (значит Банк ее\n' +
        'предоставляет). По телефону мне ответили, что срочный платеж я могу отправить\n' +
        'только через офис и на бум.носителе.\n' +
        'Вопрос: почему я не могу сделать П/п с видом платежа "срочно" в личном кабинете?\n' +
        '?(если я буду делать это через офис, то смысл срочного платежа\n' +
        'теряется).\n' +
        'Спасибо!',
}

function Panel(props) {
    return null;
}

Panel.propTypes = {
    header: PropTypes.string,
    children: PropTypes.node
};
const ReportDetails = () => (
    <div className={styles.content}>
        <Breadcrumb>
            <Breadcrumb.Item>
                <a href="/">Категории</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="/">{mocks.category.name}</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href={reverse(paths.subCategoryInfo, {id: mocks.category.id, subId: mocks.subCategory.id})}>{mocks.subCategory.name}</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{`Обращение №${mocks.id}`}</Breadcrumb.Item>
        </Breadcrumb>
        <p className={styles.title}>{mocks.subCategory.name}</p>
        <Tabs type="card">
            <Tabs.TabPane tab="Обращение" key="item-1">
                <div className={repStyles.container}>
                    <div className={repStyles.headerContainer}>
                        <div className={repStyles.left}>
                            <img src={men} className={repStyles.avatar} />
                            <p className={repStyles.name}>{mocks.fullname}</p>
                        </div>
                        <div className={repStyles.right}>
                            <p className={repStyles.title}>{`Обращение №${mocks.id}`}</p>
                            <p className={cx({
                                [repStyles.newStatus]: mocks.status.toLowerCase() === 'новое',
                                [repStyles.inProgress]: mocks.status.toLowerCase() === 'на рассмотрении',
                                [repStyles.cancel]: mocks.status.toLowerCase() === 'отклонено',
                                [repStyles.close]: mocks.status.toLowerCase() === 'закрыто',
                            })}>{mocks.status}</p>
                        </div>
                    </div>
                    <div className={repStyles.content}>
                        <div className={repStyles.reportContainer}>
                            <p className={repStyles.time}>15.07.22<br />
                                16:00</p>
                            <p className={repStyles.reportText}>{mocks.text}</p>
                        </div>
                        <div className={repStyles.inputContainer}>
                            <Input.Search
                                placeholder="Ответить на обращение"
                                enterButton="Отправить"
                                size="large"
                            />
                        </div>
                    </div>
                    <div className={repStyles.btnContainer}>
                            <Button type="primary" danger>
                                Отклонить
                            </Button>
                            <Button type="primary">Закрыть</Button>
                    </div>
                </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Справочная информация" key="item-2">
                <Collapse defaultActiveKey={['1']} ghost>
                    <Collapse.Panel header="Банкомат забрал карту" key="1">
                        <p><h3>Карта находится в стоп-листе по причине кражи/утери.</h3><br /> <span>Банкоматы всегда проверяют такую информацию и, если данные совпадают, забирают платежное средство.</span>
                            <br />
                            <h3>Клиент ввел ПИН-код неверно более 3-х раз.</h3><br /> <span>Это уже программные настройки. Предполагается, что если клиент не знает или не помнит код, то он, с большой долей вероятности, не является владельцем карточки.</span><br />
                            <h3>Банкомат завис и съел карту.</h3><br /> <span>Из-за перебоев со связью, питанием, ошибок в ПО (программном обеспечении) и по другим подобным причинам устройство тоже может забирать карточки.</span><br />
                            <h3>Карта просрочена.</h3><br /> <span>На каждом платежном средстве указан срок его действия. Если он истек, банкомат заберет такую карту. Нужно заказывать перевыпуск.</span><br />
                            <h3>На карте есть повреждения или размагнитилась полоса.</h3><br /> <span>В такой ситуации банкомат не может точно определить платежное средство и просто «проглатывает» его. Следует учитывать, что даже если впоследствии забрать карту в отделении банка, воспользоваться ею все равно не получится. Нужно заказывать перевыпуск.</span><br />
                            <h3>Подозрительная операция.</h3><br /> <span>Иногда, если клиент пытается сделать что-то подозрительное, с точки зрения банка, например, снять абсолютно все деньги со счета при том, что раньше клиент никогда такого не делал, устройство может забрать карту, определив операцию как мошенническую. Если действительно нужно снимать абсолютно все со счета, это лучше делать в отделении банка или, хотя бы, в том банкомате, который находится на территории отделения банка.</span>
                            <h3>Вышел лимит по времени.</h3><br /> <span>После завершения работы с банкоматом, устройство выдает карту и ждет, пока клиент ее заберет. Если не успеть вовремя взять платежное средство, банкомат конфискует его для того, чтобы картой не смогли воспользоваться мошенники. Чаще всего подобное бывает тогда, когда клиент берет деньги и уходит, забыв про карту.</span></p>
                    </Collapse.Panel>
                    <Collapse.Panel header="Адреса банкоматв" key="2">
                        <p><h3>Карта находится в стоп-листе по причине кражи/утери.</h3><br /> <span>Банкоматы всегда проверяют такую информацию и, если данные совпадают, забирают платежное средство.</span>
                            <br />
                            <h3>Клиент ввел ПИН-код неверно более 3-х раз.</h3><br /> <span>Это уже программные настройки. Предполагается, что если клиент не знает или не помнит код, то он, с большой долей вероятности, не является владельцем карточки.</span><br />
                            <h3>Банкомат завис и съел карту.</h3><br /> <span>Из-за перебоев со связью, питанием, ошибок в ПО (программном обеспечении) и по другим подобным причинам устройство тоже может забирать карточки.</span><br />
                            <h3>Карта просрочена.</h3><br /> <span>На каждом платежном средстве указан срок его действия. Если он истек, банкомат заберет такую карту. Нужно заказывать перевыпуск.</span><br />
                            <h3>На карте есть повреждения или размагнитилась полоса.</h3><br /> <span>В такой ситуации банкомат не может точно определить платежное средство и просто «проглатывает» его. Следует учитывать, что даже если впоследствии забрать карту в отделении банка, воспользоваться ею все равно не получится. Нужно заказывать перевыпуск.</span><br />
                            <h3>Подозрительная операция.</h3><br /> <span>Иногда, если клиент пытается сделать что-то подозрительное, с точки зрения банка, например, снять абсолютно все деньги со счета при том, что раньше клиент никогда такого не делал, устройство может забрать карту, определив операцию как мошенническую. Если действительно нужно снимать абсолютно все со счета, это лучше делать в отделении банка или, хотя бы, в том банкомате, который находится на территории отделения банка.</span>
                            <h3>Вышел лимит по времени.</h3><br /> <span>После завершения работы с банкоматом, устройство выдает карту и ждет, пока клиент ее заберет. Если не успеть вовремя взять платежное средство, банкомат конфискует его для того, чтобы картой не смогли воспользоваться мошенники. Чаще всего подобное бывает тогда, когда клиент берет деньги и уходит, забыв про карту.</span></p>
                    </Collapse.Panel>
                    <Collapse.Panel header="Комиссии по операциям" key="3">
                        {/*<p>{text}</p>*/}
                    </Collapse.Panel>
                </Collapse>
            </Tabs.TabPane>
        </Tabs>
    </div>
);

export default ReportDetails;
