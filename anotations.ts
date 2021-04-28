//Anotations

/**
 * rm -rf node_modules/ => rodar a aplicação sem o node_modules
 * Obs: iremos rodar a app sem o node modules porque iremos rodar com o docker
 */

/**
 * Os modulos servem para juntar controllers, services e eoutras coisas corelacionadas
 */

/**
 *Dockerfile*

FROM node:12.14.-alpine3.11 => Versao Node

RUN apk add --no-cache bash => rodar a aplicação com o bash

RUN npm config set cache /home/node/app/.npm-cache --global => rodar o cash do rpojeto e não do container

RUN npm i -g @nestjs/cli@7.6.0 => Rodas o nest dentro do container

USER node

WORKDIR /home/node/app
 */