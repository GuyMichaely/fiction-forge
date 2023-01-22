#!/bin/sh

# create database cluster
mkdir $PGDATA
chmod 0700 $PGDATA
initdb -D $PGDATA

# start postgres server
pg_ctl start -D $PGDATA

# create users database with username, salt, and hash fields
# psql -c "CREATE DATABASE users";
psql -c "create table users (username varchar(64) PRIMARY KEY, hash varchar(137), length INTEGER GENERATED ALWAYS AS (length(hash)) STORED);"
psql -c "create extension pgcrypto"
#echo "create extension pgcrypto" | psql -d $USER