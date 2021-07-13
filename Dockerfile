FROM buildkite/puppeteer:latest
WORKDIR /app
ADD . /app
RUN npm install update