FROM node:latest
WORKDIR /my-hub
COPY . .
RUN npm run build
EXPOSE 5006
CMD ["npm", "run","serve:ssr:my-hub"]