#!/usr/bin/env bash
# Build docker image
docker build -t pawankolhe/udacity-capstone .

# List docker images
docker images

# Run docker image
docker run -p 80:3000 pawankolhe/udacity-capstone
