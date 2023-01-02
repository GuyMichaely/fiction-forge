#!/bin/bash

case $1 in
  s)
    npm start --prefix server
    ;;
  d)
    npm start --prefix client
    ;;
  sd)
    npm start --prefix server && npm start --prefix client
    ;;
  sp)
    npm run build --prefix client && npm start --prefix server 
    ;;
esac