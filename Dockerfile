FROM node:14-alpine

WORKDIR /usr/src/app
COPY . .

RUN apk add --no-cache postgresql sudo
RUN sh postgresqlsetup.sh

EXPOSE 3000
EXPOSE 5000

CMD ["tail", "-f", "/dev/null"]