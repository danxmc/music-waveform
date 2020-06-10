# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:12.18.0-alpine as builder
 
# A directory within the virtualized Docker environment
WORKDIR /usr/src/app
 
# Copies package.json and yarn.lock to Docker environment
# does not copy package-lock.json
COPY package.json yarn.lock ./
 
# Installs all node packages
RUN yarn install
 
# Copies everything over to Docker environment
COPY . .
 
# Uses port which is used by the actual application
EXPOSE 3000
 
# Finally runs the application
CMD [ "yarn", "start" ]