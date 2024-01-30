FROM node:latest
WORKDIR /my-hub
COPY . .
EXPOSE 5006
CMD ["node", "dist/my-hub/server/server.mjs"]