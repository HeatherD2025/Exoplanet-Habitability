# Instructions here
#uses node v 26 slim as the base image for the Docker container. This means that the container will have Node.js version 22 installed, which is necessary for running the application that will be built using this Dockerfile.
FROM node:26-slim AS builder
# Install OpenSSL (Required for Prisma to talk to databases on Linux)
RUN apt-get update -y && apt-get install -y openssl
# Create app directory
WORKDIR /app
# copy package.json and package-lock.json to the working directory
COPY package*.json ./
# copy the prisma schema early so postinstall can use it
COPY prisma ./prisma/
# Install app dependencies (this will run prisma generate via postinstall)
RUN npm install
# copy the rest of the application code
COPY . .


# Production stage - only base minimum for Prisma/Postrges to work
FROM node:26-slim
# Security fix: update AND upgrade to patch vulnerabilities
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y openssl && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/prisma ./prisma

# set port environment variable to 3000
ENV PORT=3000
# expose port 3000 to allow external access to the application
EXPOSE 3000

CMD [ "npm", "start" ]


