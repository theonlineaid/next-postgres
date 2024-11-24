# Use an official Node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
# RUN npm next build

# Expose the port the app runs on (Next.js uses 3000 by default)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
