FROM node:alpine as BUILD
WORKDIR /usr/letterboxwordlist
RUN npm install typescript -g
COPY ./index.ts .
RUN tsc ./index.ts

from nginx
COPY ./index.html ./twl06.txt /usr/share/nginx/html
COPY --from=BUILD /usr/letterboxwordlist/index.js /usr/share/nginx/html/index.js
EXPOSE 80
