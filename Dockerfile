FROM node:12.16.1-alpine
COPY . . 
CMD node server.js
EXPOSE 80

