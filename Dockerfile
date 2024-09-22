FROM node:20

WORKDIR /Users/tamarhessen/forum_project

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 27017

CMD ["npm", "start"]