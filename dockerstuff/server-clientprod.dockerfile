FROM node:14-alpine

WORKDIR /app

# Build the frontend
COPY client/package.json client/package-lock.json ./
RUN npm install
RUN npm run build

# Copy the built frontend to the backend
COPY --from=0 /app/build /app/server/public

# Install backend dependencies
COPY server/package.json server/package-lock.json ./
RUN npm install

CMD ["npm", "start"]