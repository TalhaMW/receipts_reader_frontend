# Use Alpine Linux as the base image
FROM alpine:3.19

ENV NODE_VERSION 23.3.0

WORKDIR /app

RUN apk add --no-cache nodejs-current npm

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm","start" ]

EXPOSE 3000

