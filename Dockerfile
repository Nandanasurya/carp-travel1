FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

# Fix Browserslist issue
RUN npx update-browserslist-db@latest

COPY . .

# Increase Node.js memory limit
RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

EXPOSE 3000

CMD ["npm", "start"]
