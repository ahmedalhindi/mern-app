FROM node:lts-alpine3.13
CMD [ "npm", "start" ]
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json .
RUN npm install
EXPOSE 3001
COPY . .