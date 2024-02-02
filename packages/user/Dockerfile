FROM node:20.10.0-alpine AS builder
WORKDIR /packages/user

COPY package.json .

COPY . .

RUN yarn build

RUN yarn dev