import React from 'react';
import styles from "../subCategoriesList/styles.module.scss";
import {Breadcrumb} from "antd";
import Report from "../../components/report";

const mocks = {
    category: {
        id: 1,
        name: "РКО",
    },
    subCategory: {
        id: 2,
        name: 'Платежи в рублях'
    },
    reports: [
        {
            id: 1,
            status: 'новое',
            text: 'Планирую осуществлять предпринимательскую деятельность с коллегами за пределами РФ. Собственно на мой счет будут поступать платежи в валюте. Я немного переживаю, т.к. сейчас усилена слежка за валютными переводами и всё такое. Как мне быть уверенным что я не попаду под какие-то штрафные санкции и т.д.?',
            fullname: 'Иванов И. И.'
        },
        {
            id: 2,
            status: 'новое',
            text: 'Перевел деньги на карту сбера на СВОЙ ЖЕ счёт! Почему с меня взяли коммиссию?!',
            fullname: 'Иванов И. И.'
        },
        {
            id: 3,
            status: 'новое',
            text: 'Добрый день! Платежи за 01.07.2022 пропали из ленты операций, так же, при запросе выписки возникает ошибка, спустя какое-то время, и выписка не запрашивается.',
            fullname: 'Иванов И. И.'
        },
        {
            id: 4,
            status: 'На рассмотрении',
            text: 'Добрый день, в разделе ЗП-проект нажимаю "Новая ведомость" после чего\n' +
                'выдает ошибку "Ошибка соединения с сервером". Именно на этом шаге, всё\n' +
                'остальное работает хорошо. Чистка кеш\\куки не помогла. Браузер Яндекс. Скрин\n' +
                'по непонятный причине до вас на почту не доходит.',
            fullname: 'Иванов И. И.'
        },
        {
            id: 5,
            status: 'На рассмотрении',
            text: 'Не понимаю почему у меня не доступен выпуск карты?',
            fullname: 'Иванов И. И.'
        },
        {
            id: 6,
            status: 'Отклонено',
            text: 'Мне необходимо сделать сделать и оправить срочный\n' +
                'платеж! В тарифах банка данная услуга прописана (значит Банк ее\n' +
                'предоставляет). По телефону мне ответили, что срочный платеж я могу отправить\n' +
                'только через офис и на бум.носителе.\n' +
                'Вопрос: почему я не могу сделать П/п с видом платежа "срочно" в личном кабинете?\n' +
                '?(если я буду делать это через офис, то смысл срочного платежа\n' +
                'теряется).\n' +
                'Спасибо!',
            fullname: 'Иванов И. И.'
        },
        {
            id: 7,
            status: 'Закрыто',
            text: 'Планирую осуществлять предпринимательскую деятельность с коллегами за пределами РФ. Собственно на мой счет будут поступать платежи в валюте. Я немного переживаю, т.к. сейчас усилена слежка за валютными переводами и всё такое. Как мне быть уверенным что я не попаду под какие-то штрафные санкции и т.д.?',
            fullname: 'Иванов И. И.'
        },
        {
            id: 8,
            status: 'Закрыто',
            text: 'Планирую осуществлять предпринимательскую деятельность с коллегами за пределами РФ. Собственно на мой счет будут поступать платежи в валюте. Я немного переживаю, т.к. сейчас усилена слежка за валютными переводами и всё такое. Как мне быть уверенным что я не попаду под какие-то штрафные санкции и т.д.?',
            fullname: 'Иванов И. И.'
        },

    ]
}

const ReportList = () => (
    <div className={styles.content}>
        <Breadcrumb>
            <Breadcrumb.Item>
                <a href="/">Категории</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="/">{mocks.category.name}</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{mocks.subCategory.name}</Breadcrumb.Item>
        </Breadcrumb>
        <p className={styles.title}>{mocks.subCategory.name}</p>
        {mocks.reports.map((item, index) => <Report index={index} report={{...item, categoryId: mocks.category.id, subCategoryId: mocks.subCategory.id}} key={item.id} />)}
    </div>
)

export default ReportList;