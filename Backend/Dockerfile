FROM node:22-alpine
WORKDIR /src
COPY package*.json /src
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8000
CMD [ "npm", "start" ]