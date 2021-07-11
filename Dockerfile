FROM timbru31/java-node:latest
WORKDIR /app
ADD . /app

RUN npm install
RUN npm update
