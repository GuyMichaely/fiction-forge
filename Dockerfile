FROM node:14-alpine

WORKDIR /usr/src/app
#COPY . .

EXPOSE 3000
EXPOSE 5000
# ----------
# debug only
EXPOSE 9229
# ----------

# postgresql setup
# help from https://luppeng.wordpress.com/2020/02/28/install-and-start-postgresql-on-alpine-linux/
RUN apk add --no-cache postgresql postgresql-contrib
COPY psqlrootsetup.sh .
RUN ./psqlrootsetup.sh
ENV PGDATA=/var/lib/postgresql/data
COPY psqlnorootsetup.sh .
CMD ["tail", "-f", "/dev/null"]
# RUN ["su", "postgres", "-mc", "sh", "psqlnorootsetup.sh"]
# CMD su postgres -c "postgres -D $PGDATA"