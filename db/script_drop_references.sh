red=`tput setaf 1`
green=`tput setaf 2`
yellow=`tput setaf 3`
purple=`tput setaf 5`
reset=`tput sgr0`

echo "${yellow}drop references${purple}"
PGGSSENCMODE=disable psql -h localhost -d hackathon -U 19545303 -p 5432 -a -q -f /Users/19545303/project/reactnative/finopolis/db/sql_drop_references.sql
echo "${reset}"
