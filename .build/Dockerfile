FROM node:16-bullseye

ENV APP_PATH=app

COPY . ${APP_PATH}

WORKDIR ${APP_PATH}

RUN npm install && \
    yarn run build

CMD ["npm", "run", "serve", "--", "--build", "--port", "80", "--host", "0.0.0.0"]
