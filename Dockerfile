FROM node:16-alpine AS buildstep

WORKDIR /app

COPY package.json ./package.json
COPY tsconfig.json ./tsconfig.json
COPY package-lock.json ./package-lock.json

RUN npm i --production

COPY ./src ./src

RUN npm run build 
RUN npm run copy-files

FROM buildstep
WORKDIR /app
COPY --from=buildstep /app/package.json /app/package.json
COPY --from=buildstep /app/package-lock.json /app/package-lock.json
COPY --from=buildstep /app/dist /app/dist


CMD [ "npm", "start" ]