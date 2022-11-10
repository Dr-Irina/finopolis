SELECT 'CREATE DATABASE techsupport'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'techsupport')\gexec