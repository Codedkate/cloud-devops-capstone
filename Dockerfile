FROM node:14

## Step 1:
# Create a working directory
# WORKDIR /app
WORKDIR /usr/src/app

## Step 2:
# COPY package.json
COPY package*.json ./

## Step 3:
# Install app dependencies
RUN npm install

## Step 4:
# Bundle app source
COPY . .

## Step 5:
# Set PORT environment variable
ENV PORT=80

## Step 6:
# Expose port 80
EXPOSE 80

## Step 7:
# Run index.js at container launch
CMD ["npm", "start"]
