FROM ubuntu:latest
LABEL authors="almio"

FROM node:18
WORKDIR /app
COPY . .
RUN npm ci
CMD ["npm", "start"]