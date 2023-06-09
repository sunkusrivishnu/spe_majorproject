FROM node:14

# Set up the working directory
WORKDIR /app

# Copy the application files
COPY package*.json ./
RUN npm install
COPY . .

# Specify the start command
CMD ["npm", "start"]
