FROM node:14-alpine

#COPY . . # uncomment if not using volume mapping
# install packages
RUN apk add --no-cache postgresql sudo

WORKDIR /usr/src/app

EXPOSE 3000
EXPOSE 5000

RUN sh postgresqlsetup.sh

CMD ["tail", "-f", "/dev/null"]