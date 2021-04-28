FROM node:15.14.0-alpine3.10
WORKDIR /app

COPY . .

RUN yarn install

CMD ["yarn", "start"]
