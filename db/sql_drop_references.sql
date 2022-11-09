alter table users drop constraint roles_users;
alter table role_categories drop constraint roles_role_categories;
alter table role_categories drop constraint categories_role_categories;
alter table category_reports drop constraint categories_category_reports;
alter table category_reports drop constraint reports_category_reports;
