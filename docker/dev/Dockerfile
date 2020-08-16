FROM node:10.13.0-alpine

LABEL MAINTAINER="Uche Akogwu <akogwuuche@ymail.com>"
LABEL application="hims-backend"

ENV TERM=xterm-256color

WORKDIR /usr/app

RUN apk update && apk upgrade && \
  apk --no-cache add \
  bash \
  && npm install -g yarn@1.12.x && npm install -g ts-node-dev && rm -rf package-lock.json
COPY package.json /usr/app
COPY yarn.lock /usr/app

RUN yarn install
