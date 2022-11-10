/* constraint parent_table: roles */
alter table users add constraint roles_users foreign key (id_role) references roles (id);
alter table role_categories add constraint roles_role_categories foreign key (id_role) references roles (id);

/* constraint parent_table: categories */
alter table role_categories add constraint categories_role_categories foreign key 
(id_category) references categories (id);
alter table category_reports add constraint categories_category_reports foreign key (id_category) references categories (id);

/* constraint parent_table: reports */
alter table category_reports add constraint reports_category_reports foreign key (id_report) references reports (id);
