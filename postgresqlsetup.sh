# from https://luppeng.wordpress.com/2020/02/28/install-and-start-postgresql-on-alpine-linux/

# create folder for server socket
mkdir /run/postgresql
chown postgres:postgres /run/postgresql/

# create database cluster
sudo -u postgres mkdir /var/lib/postgresql/data
sudo -u postgres chmod 0700 /var/lib/postgresql/data
sudo -u postgres initdb -D /var/lib/postgresql/data

# start postgresql server
sudo -u postgres pg_ctl start -D /var/lib/postgresql/data