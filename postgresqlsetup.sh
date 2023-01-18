# from https://luppeng.wordpress.com/2020/02/28/install-and-start-postgresql-on-alpine-linux/

export PGDATA=/var/lib/postgresql/data

# create folder for server socket
mkdir /run/postgresql
chown postgres:postgres /run/postgresql/

# create database cluster
su postgres -c "mkdir $PGDATA"
su postgres -c "chmod 0700 $PGDATA"
su postgres -c "initdb -D $PGDATA"