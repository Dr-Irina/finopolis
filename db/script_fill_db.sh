red=`tput setaf 1`
green=`tput setaf 2`
yellow=`tput setaf 3`
purple=`tput setaf 5`
reset=`tput sgr0`

echo "${yellow}sql_insert_categories${red}"
PGGSSENCMODE=disable psql -h localhost -d hackathon -U 19545303 -p 5432 -a -q -f /Users/19545303/project/reactnative/finopolis/db/sql_inserts/sql_insert_categories.sql
echo "${reset}"

echo "${yellow}sql_insert_reports${red}"
PGGSSENCMODE=disable psql -h localhost -d hackathon -U 19545303 -p 5432 -a -q -f /Users/19545303/project/reactnative/finopolis/db/sql_inserts/sql_insert_reports.sql
echo "${reset}"

echo "${yellow}sql_insert_roles${red}"
PGGSSENCMODE=disable psql -h localhost -d hackathon -U 19545303 -p 5432 -a -q -f /Users/19545303/project/reactnative/finopolis/db/sql_inserts/sql_insert_roles.sql
echo "${reset}"

echo "${yellow}sql_insert_category_reports${red}"
PGGSSENCMODE=disable psql -h localhost -d hackathon -U 19545303 -p 5432 -a -q -f /Users/19545303/project/reactnative/finopolis/db/sql_inserts/sql_insert_category_reports.sql
echo "${reset}"

echo "${yellow}sql_insert_role_categories${red}"
PGGSSENCMODE=disable psql -h localhost -d hackathon -U 19545303 -p 5432 -a -q -f /Users/19545303/project/reactnative/finopolis/db/sql_inserts/sql_insert_role_categories.sql
echo "${reset}"

echo "${yellow}sql_insert_users${red}"
PGGSSENCMODE=disable psql -h localhost -d hackathon -U 19545303 -p 5432 -a -q -f /Users/19545303/project/reactnative/finopolis/db/sql_inserts/sql_insert_users.sql
echo "${reset}"

