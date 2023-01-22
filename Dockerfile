FROM node:14-alpine

WORKDIR /usr/src/app
#COPY . .

EXPOSE 3000
EXPOSE 5000
# ----------
# debug only
EXPOSE 9229
# ----------

# TODO: 
# write a program that runs posgtres -D $PGDATA and waits for the success message
# once seeing success the program will exit and leave the postgres server running
# then can continue configuration

# postgresql setup
# help from https://luppeng.wordpress.com/2020/02/28/install-and-start-postgresql-on-alpine-linux/
RUN apk add --no-cache postgresql postgresql-contrib
COPY psqlrootsetup.sh .
RUN ./psqlrootsetup.sh
ENV PGDATA=/var/lib/postgresql/data
COPY psqlnorootsetup.sh .
RUN ["su", "postgres", "-mc", "./psqlnorootsetup.sh"]
#CMD ["tail", "-f", "/dev/null"]
CMD su postgres -c "postgres -D $PGDATA"