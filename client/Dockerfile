# Containerize Client
FROM mhart/alpine-node:12

WORKDIR /client
COPY package.json /client/
COPY yarn.lock /client/

RUN yarn install
COPY . /client/

EXPOSE 3000
CMD ["yarn", "start"]