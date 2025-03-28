# Use a specific node version and make sure npm is up-to-date
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache effectively
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Fix Browserslist issue
RUN npx update-browserslist-db@latest

# Copy the rest of the app files
COPY . .

# Optional: Add debug info (can help identify the issue with memory or versions)
RUN node -v && npm -v && free -h  # This will show Node.js version, npm version, and memory status

# Increase Node.js memory limit if needed
RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Expose port 3000
EXPOSE 3000

# Default command to run the app
CMD ["npm", "start"]
