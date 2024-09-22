FROM node:20

WORKDIR /Users/tamarhessen/forum_project

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]