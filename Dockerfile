FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . /app

# Debug: Verify that the `pages` or `app` directory exists
RUN ls -R /app

# Run Next.js build with increased memory limit
RUN NODE_OPTIONS="--max-old-space-size=8192" npm run build --verbose

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
