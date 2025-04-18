FROM node:18.18.1-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .


CMD [ "npm", "run", "dev" ]