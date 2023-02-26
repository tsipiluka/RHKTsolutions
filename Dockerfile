# Stage 1
FROM node:18.12.1-alpine as builder
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ./rhkt-frontend/package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@latest

COPY ./rhkt-frontend /usr/src/app
RUN npm run build

FROM nginx:1.13.9-alpine
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/dist/rhkt-frontend /usr/share/nginx/html
RUN rm -rf /usr/src/app/node_modules

LABEL traefik.enable="true"
LABEL traefik.http.routers.nginx.rule="Host(`rhkt-solutions.wh0cares.live`)"

