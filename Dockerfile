FROM node:11.14.0-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json /usr/app/
RUN npm install

COPY . /usr/app
EXPOSE 4000
CMD ["./entrypoint.sh", "npm", "run", "watch"]
