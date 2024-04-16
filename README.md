# Vite Project Deployment

This guide will help you to build and run your Vite-based React application in a Docker container.

## Prerequisites

- Docker installed on your machine.

## Building the Docker Image

To build the Docker image, run the following command in your terminal:

docker build -t quitiaquez_sebastian_coding_assignment12 .

## To run the image

docker run -p 8083:6006 --name quitiaquez_sebastian_coding_assignment12 quitiaquez_sebastian_coding_assignment12

## Now to execute it

docker start quitiaquez_sebastian_coding_assignment12
