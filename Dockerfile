FROM node:11.14.0-alpine

RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json /usr/app/
RUN npm install \
    && apk del build-dependencies

COPY . /usr/app
EXPOSE 4000
CMD ["./entrypoint.sh", "node", "./bin/server"]
