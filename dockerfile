FROM node:latest
WORKDIR /my-hub
COPY . .
EXPOSE 5006
CMD ["npm", "run","serve:ssr:my-hub"]