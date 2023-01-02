FROM node:14-alpine

WORKDIR /app

COPY client/package.json client/package-lock.json ./

RUN npm install

CMD ["npm", "start"]