# Stage 1
FROM node:14.15.4 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/angular-app /usr/share/nginx/html

LABEL traefik.enable="true"
LABEL traefik.http.routers.nginx.rule="Host(`rhkt-solutions.wh0cares.live`)"

