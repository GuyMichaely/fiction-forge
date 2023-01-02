FROM node:14-alpine

WORKDIR /app

COPY server/package.json server/package-lock.json ./

RUN npm install

CMD ["npm", "start"]