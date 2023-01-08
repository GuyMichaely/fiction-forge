FROM node:14-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
EXPOSE 5000

CMD ["tail", "-f", "/dev/null"]