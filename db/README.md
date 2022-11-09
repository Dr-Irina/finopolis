# JSON по HTTP

![Build Status](https://finopolis.ru/local/templates/fino_new/img/logo_RU.svg)

## Формирование БД

Запустутите Postgress, необходимо указать наименование БД и имя владельца аккаунта, либо создайте новый БД при отсутсвии
Далее укажите во всех файлах .sh в директории sql-commands
PGGSSENCMODE=disable psql -h localhost -d <ИМЯ*БД> -U <ИМЯ*ВЛАДЕЛЬЦА> -p 5432 -a -q -f <ПУТЬ*ДО*ПРОЕКТА>/db/sql_inserts/sql_insert_reports.sql

Пример
PGGSSENCMODE=disable psql -h localhost -d hackathon -U 19545303 -p 5432 -a -q -f /Users/wmrmsile/project/finopolis/db/sql_inserts/sql_insert_reports.sql

Далее запустите script_fill_db.sh
