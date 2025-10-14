FROM node:18 as build-stage
WORKDIR /app
COPY package*.json ./

COPY ../ .
RUN npm install
RUN npm run build -- --configuration production


FROM nginx:stable-alpine3.20
RUN mkdir /app
COPY --from=build-stage /app/dist/formulaire-guford/browser/ /app
COPY ../nginx.conf /etc/nginx/nginx.conf
USER root

