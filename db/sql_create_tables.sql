\! tput setaf 1; "___________________________create table users ____________________________";
\! tput setaf 2;

create table users (
  id        varchar primary key,
  id_role   varchar,
  name      varchar
);

\! tput setaf 3; "____________________________________________________________________________________";
\! tput setaf 1; "___________________________create table roles ____________________________";
\! tput setaf 2;

create table roles (
  id    varchar primary key,
  name  varchar
);

\! tput setaf 3; "____________________________________________________________________________________";
\! tput setaf 1; "___________________________create table role_categories ____________________________";
\! tput setaf 2;

create table role_categories (
  id_role       varchar,
  id_category   varchar
);

\! tput setaf 3; "____________________________________________________________________________________";
\! tput setaf 1; "___________________________create table categories ____________________________";
\! tput setaf 2;

create table categories (
  id          varchar primary key,
  name        varchar,
  description varchar
);

\! tput setaf 3; "____________________________________________________________________________________";
\! tput setaf 1; "___________________________create table category_reports ____________________________";
\! tput setaf 2;

create table category_reports (
  id_report   varchar,
  id_category varchar
);

\! tput setaf 3; "____________________________________________________________________________________";
\! tput setaf 1; "___________________________create table reports ____________________________";
\! tput setaf 2;

create table reports (
  id      varchar primary key,
  text    varchar
);

\! tput setaf 3; "____________________________________________________________________________________";
\! tput setaf 1; "___________________________create table keywords ____________________________";
\! tput setaf 2;

create table keywords (
  id    varchar primary key,
  name  varchar
);
