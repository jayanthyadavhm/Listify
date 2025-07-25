# Listify

A full-stack Task management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User authentication (Register/Login)
- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Responsive design
- Modern UI with Tailwind CSS

## Tech Stack

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT


## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the server directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

5. Create a `.env` file in the client directory:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

6. Start the backend server:
   ```bash
   cd server
   npm run server
   ```

7. Start the frontend development server:
   ```bash
   cd client
   npm start
   ```

## Deployment

The application is deployed on Vercel:
- LIVE : https://cc-x1mw.vercel.app/
 
