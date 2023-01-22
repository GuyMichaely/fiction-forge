FROM node:14-alpine

WORKDIR /usr/src/app
#COPY . .

EXPOSE 3000
EXPOSE 5000
EXPOSE 9229

# postgresql setup
RUN apk add --no-cache postgresql sudo
COPY postgresqlsetup.sh .
RUN ./postgresqlsetup.sh

CMD su postgres -c "postgres -D $PGDATA"
#CMD ["tail", "-f", "/dev/null"]