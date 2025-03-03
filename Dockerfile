 
FROM node:16.20.2-alpine as build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app
 
COPY package*.json ./
 
 
RUN npm install