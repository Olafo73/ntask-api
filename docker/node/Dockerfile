FROM node:6.9.1

MAINTAINER Nacho Olavarrieta

RUN apt-get update \
    && apt-get install -y git \
    && mkdir ntask-api

WORKDIR /ntask-api

CMD ["npm", "start"]
