FROM node:16

WORKDIR /app

RUN apt-get update
RUN apt-get install -y git nano vim curl tmux
RUN yarn global add ngrok nodemon

COPY ./src/package*.json ./
RUN yarn install

COPY ./src/* ./

CMD ["yarn", "start"]