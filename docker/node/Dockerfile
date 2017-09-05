FROM node:6.9.1

MAINTAINER Nacho Olavarrieta

RUN apt-get update \
    && apt-get install -y git gcc g++ sqlite3 \
    && ln -s "$(which nodejs)" /usr/bin/node \
    && mkdir ntask-api

WORKDIR /ntask-api

CMD ["npm", "start"]
