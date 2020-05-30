# Containerize Server
FROM mhart/alpine-node:12

WORKDIR /server
COPY package.json /server/
COPY yarn.lock /server/

RUN yarn install
COPY . /server/

EXPOSE 3011
CMD ["yarn", "start"]