# create database cluster
mkdir $PGDATA
chmod 0700 $PGDATA
initdb -D $PGDATA

# create users database with username, salt, and hash fields
# psql -c "CREATE DATABASE users";
psql -d $USER -c "create table users (username varchar(64) PRIMARY KEY, hash varchar(137), length INTEGER GENERATED ALWAYS AS (length(hash)) STORED);"
echo "create extension pgcrypto" | psql -d $USER
#echo "create extension pgcrypto" | psql -d $USER