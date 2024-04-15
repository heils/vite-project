# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app/quitiaquez_sebastian_ui_garden

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Expose the port Storybook will run on
EXPOSE 6006

# Start the Storybook server
CMD ["npm", "run", "storybook"]
