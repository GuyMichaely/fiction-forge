FROM node:14-alpine

# Set up the working directory
WORKDIR /usr/src/app

# Set up the volume mapping
VOLUME /usr/src/app

#CMD ["tail", "-f", "/dev/null"]