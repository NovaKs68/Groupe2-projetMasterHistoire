FROM keymetrics/pm2:14-alpine

# Bundle APP files

WORKDIR /app

#handle package installation
COPY package*.json /app/
ENV NPM_CONFIG_LOGLEVEL warn

## installs gyp to build dependencies and delete it afterward (required for bcrypt)
RUN apk add --no-cache --virtual .gyp python make g++ && npm install && apk del .gyp
RUN npm ci --only=production
#copy project files
COPY . .
RUN rm -rf ./server/helpers/logger.js

EXPOSE 8080


CMD [ "pm2-runtime", "start", "pm2.json" ]

