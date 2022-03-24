FROM node:14-alpine AS build
WORKDIR /appdocker
COPY ./appdocker /usr/src/appdocker
COPY package*.json .
RUN npm install
RUN echo "node_modules" > .dockerignore
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /appdocker/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
