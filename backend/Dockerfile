# Backend Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD sh -c "node init.js && node index.js"

CMD ["node", "server.js"]