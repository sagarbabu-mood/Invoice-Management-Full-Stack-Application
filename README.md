Invoice Management Full-Stack Application

This is a full-stack web application for managing invoices, allowing users to create, update, view, and store invoices securely. The application features user authentication, responsive design, and a well-structured front-end and back-end setup.

Table of Contents
Features
Technologies Used
Folder Structure
Getting Started
API Endpoints
Environment Variables
Screenshots
Future Improvements
Features
User Authentication: Secure login and sign-up functionality.

Invoice Management:

Add, edit, and view invoices.
Status management (Paid, Unpaid, Pending).
Responsive Design: Optimized for desktop and mobile devices.
Persistent Data: Uses localStorage for front-end persistence and a database for back-end storage.
Navigation: Conditional rendering of navigation links based on authentication status.
Technologies Used
Frontend
React.js (Create React App)
CSS (Responsive design with media queries)
React Router DOM for routing
Backend
Node.js
Express.js
MongoDB with Mongoose (Database)
JWT for authentication

Folder Structure

invoicemanagementApp/
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── LoginPage.js
│ │ │ ├── SignUpPage.js
│ │ │ ├── HomePage.js
│ │ │ ├── InvoiceForm.js
│ │ │ ├── Navbar.js
│ │ │ ├── NotFound.js
│ │ ├── App.js
│ │ ├── App.css
│ │ ├── index.js
│ ├── package.json
├── backend/
│ ├── models/
│ │ ├── Invoice.js
│ │ ├── User.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── invoiceRoutes.js
│ ├── server.js
│ ├── .env
│ ├── package.json
Getting Started

Prerequisites

Node.js and npm installed

MongoDB database (local or cloud instance)

Setup

Clone the Repository

git clone https://github.com/GandluriVineeth8/inovicefullstakapp.git

cd inovicefullstakapp

Backend Setup

Navigate to the backend folder:

bash

cd backend

Install dependencies:

bash

npm install

Create a .env file and add the following environment variables:

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Start the backend server:

npm start

Frontend Setup

Navigate to the frontend folder:

cd ../frontend

Install dependencies:

npm install

Start the frontend development server:

npm start

API Endpoints
Authentication
POST /api/auth/signup: Register a new user.
POST /api/auth/login: Authenticate a user and return a token.
Invoices
GET /api/invoices: Get all invoices for the authenticated user.
POST /api/invoices: Create a new invoice.
PUT /api/invoices/:id: Update an invoice by ID.
DELETE /api/invoices/:id: Delete an invoice by ID.
Environment Variables
The application requires the following environment variables:

Backend (.env in the backend folder):
MONGO_URI: MongoDB connection string.
JWT_SECRET: Secret key for JWT authentication.
PORT: Backend server port (default: 5000).

Screenshots

Login Page

Home Page

Invoice Form

Future Improvements
Add user roles (e.g., admin and regular users).
Implement advanced filtering and sorting for invoices.
Integrate a payment gateway for online invoice payments.
Add automated email notifications for overdue invoices.
Feel free to contribute and improve the project! If you encounter any issues, open an issue on the GitHub repository.

This document is ready to include in your project as a README.md file. Let me know if you need further customization!
