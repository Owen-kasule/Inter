# Retail Management System

## Overview
The Retail Management System is a full-stack application that allows users to manage items in a retail environment. It consists of a Laravel backend that provides a RESTful API with JWT authentication and a React frontend for user interaction.

## Project Structure
```
retail-management-system
├── backend                # Laravel backend
│   ├── app
│   │   ├── Http
│   │   │   └── Controllers
│   │   │       ├── AuthController.php
│   │   │       └── ItemController.php
│   │   └── Models
│   │       ├── User.php
│   │       └── Item.php
│   ├── config
│   │   └── auth.php
│   ├── database
│   │   └── migrations
│   │       └── create_items_table.php
│   ├── routes
│   │   └── api.php
│   ├── composer.json
│   └── .env
├── frontend               # React frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Auth
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Signup.jsx
│   │   │   ├── Items
│   │   │   │   ├── AddItem.jsx
│   │   │   │   ├── EditItem.jsx
│   │   │   │   └── ItemList.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services
│   │   │   └── api.js
│   │   └── App.js
│   ├── package.json
│   └── public
│       └── index.html
└── README.md
```

## Backend Setup
1. **Install Dependencies**: Navigate to the `backend` directory and run:
   ```
   composer install
   ```

2. **Environment Configuration**: Copy the `.env.example` to `.env` and configure your database settings and JWT secret.

3. **Run Migrations**: Execute the following command to create the necessary database tables:
   ```
   php artisan migrate
   ```

4. **Start the Server**: Run the Laravel development server:
   ```
   php artisan serve
   ```

## Frontend Setup
1. **Install Dependencies**: Navigate to the `frontend` directory and run:
   ```
   npm install
   ```

2. **Start the Development Server**: Run the following command to start the React application:
   ```
   npm start
   ```

## API Endpoints
- **Authentication**
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Login and receive a JWT token.

- **Items Management** (Protected by JWT)
  - `GET /api/items`: Retrieve a list of items.
  - `POST /api/items`: Add a new item.
  - `PUT /api/items/{id}`: Update an existing item.
  - `DELETE /api/items/{id}`: Delete an item.

## Usage
- Access the frontend application in your browser at `http://localhost:3000`.
- Use the authentication endpoints to register and log in.
- Once logged in, you can manage items through the dashboard.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.