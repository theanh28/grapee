FROM node:15

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8000
ENV REACT_APP_BROWSER_KEY=AIzaSyBDwH5RmphvnaGUXv_jFcfzfXHwwP4_w8k

EXPOSE 5000:8000

CMD [ "npm", "start" ]