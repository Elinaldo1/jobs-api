FROM node:16

WORKDIR /usr/app/jobs-api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "dev" ]