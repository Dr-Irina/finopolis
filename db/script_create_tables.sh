red=`tput setaf 1`
green=`tput setaf 2`
yellow=`tput setaf 3`
purple=`tput setaf 5`
reset=`tput sgr0`

echo "${yellow}create tables${red}"
PGGSSENCMODE=disable psql -h localhost -d hackathon -U 19545303 -p 5432 -a -q -f /Users/19545303/project/reactnative/hack_back/db/sql_create_tables.sql
echo "${reset}"