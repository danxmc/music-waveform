# Stage 1 - build react app first 

# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:12.18.0-alpine as build
 
# A directory within the virtualized Docker environment
WORKDIR /usr/src/app
 
# Copies package.json and yarn.lock to Docker environment
# does not copy package-lock.json
COPY package.json yarn.lock ./
 
# Installs all node packages
RUN yarn install

#ENV PATH="./node_modules/.bin:$PATH"
 
# Copies everything over to Docker environment
COPY . .
 
# Uses port which is used by the actual application
# EXPOSE 3000
 
# Finally build the application
RUN yarn build


# Stage 2: Build the final server image, copy the react build files and serve app

# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM nginx:1.19.0-alpine

# Copy build files from Stage 1 to nginx default serve directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Remove default configuration file from image
# replace it with custom configuration file on react project
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Use port which is used by the actual application
EXPOSE 80

# Finally run and serve application
CMD ["nginx", "-g", "daemon off;"]