FROM node:16.9.0-slim
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3022
CMD ["npm", "run", "start:prod"]