FROM node:16-bullseye

ARG ENV

ENV APP_PATH=app

COPY . ${APP_PATH}

WORKDIR ${APP_PATH}


RUN if [ "$ENV" = "prod" ] ; then cp .env.dist.prod .env ; else cp .env.dist.preprod .env ; fi

RUN yarn install && \
    yarn run build

CMD ["npm", "run", "serve", "--", "--build", "--port", "80", "--host", "0.0.0.0"]
