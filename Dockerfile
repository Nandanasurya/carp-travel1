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

# Add debug info (node version, npm version, and memory usage)
RUN node -v && npm -v && free -h  # Debugging memory status

# Optional: Upgrade npm to latest
RUN npm install -g npm@latest

# Increase Node.js memory limit
RUN NODE_OPTIONS="--max-old-space-size=8192" npm run build --verbose

# Expose port 3000
EXPOSE 3000

# Default command to run the app
CMD ["npm", "start"]
