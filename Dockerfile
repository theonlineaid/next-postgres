# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app runs on (Next.js uses 3000 by default)
EXPOSE 3000

COPY wait-for-postgres.sh /wait-for-postgres.sh
RUN chmod +x /wait-for-postgres.sh
# RUN sudo chmod -R 755 /home/bdtask24-8/Downloads/next-project/001/data/db

# Start the Next.js application
CMD ["npm", "start"]
