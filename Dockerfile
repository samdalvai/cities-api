FROM node:16-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json ./
COPY src ./src

RUN ls -a

RUN npm install
RUN node -v

EXPOSE 3000

CMD ["npm","start"]