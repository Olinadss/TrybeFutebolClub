FROM node:16-alpine

WORKDIR /frontend

COPY package.json .

RUN npm install

COPY . .

RUN npm start
