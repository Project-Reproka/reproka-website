FROM node:20

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 443
EXPOSE 80

CMD [ "node", "index.js" ]
