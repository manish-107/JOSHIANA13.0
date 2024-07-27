# JOSHIANA13.0

## Overview

JOSHIANA13.0 is a web application consisting of a frontend and a backend. This document provides a brief overview of both parts of the project.

## Frontend

The frontend is built using modern web technologies including React, Vite, and TailwindCSS. It also incorporates Three.js for 3D graphics and Framer Motion for animations.

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/manish-107/JOSHIANA13.0.git
   ```
2. Navigate to the frontend directory:
   ```sh
   cd joshiana13-0/frontend
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

### Deployment

To deploy the frontend on GitHub Pages:

1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy to GitHub Pages:
   ```sh
   npm run deploy
   ```

### Dependencies

- React
- Vite
- TailwindCSS
- React Router DOM
- Three.js
- Framer Motion

## Backend

The backend is built using Node.js, Express, and MongoDB. It includes user authentication with JWT and bcrypt for password hashing. The backend also provides RESTful API endpoints for managing participants and registration data.

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/joshiana13-0.git
   ```
2. Navigate to the backend directory:
   ```sh
   cd joshiana13-0/backend
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables (create a `.env` file):
   ```
   MONGODBURL=mongodb://localhost:27017/joshiana
   JWT_SECRET=your_jwt_secret
   ```
5. Start the server:
   ```sh
   npm run dev
   ```

### Routes

- `POST /adminLogin`: Admin login
- `POST /adminSignup`: Admin signup
- `GET /showAllParticipant`: Show all participants (protected route)
- `POST /userRegister`: User registration

### Dependencies

- Express
- Mongoose
- bcryptjs
- jsonwebtoken
