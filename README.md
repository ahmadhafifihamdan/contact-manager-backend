# Contact Management App (MyContacts)

This project is a **Contact Management REST API** built as part of the  
**MyMahir TalentLabs – Back End Development** program.

The application demonstrates backend fundamentals including authentication, authorization, CRUD operations, database persistence, and structured error handling using **Node.js, Express, and MongoDB**.

---

## 📌 Project Overview

**MyContacts** is a backend API that allows users to:

- Register and log in securely
- Authenticate using JSON Web Tokens (JWT)
- Manage their own contacts (Create, Read, Update, Delete)
- Enforce user ownership (no cross-user access)
- Handle invalid input and edge cases gracefully

All APIs are tested using **Thunder Client**.  
This project does not include a frontend.

---

## 🛠 Tools & Libraries

### Runtime & Framework
- **Node.js**  
  Core modules used: `http`, `path`, `fs`
- **Express.js**  
  Used to build RESTful APIs with routing, middleware, request handling, and JSON parsing

### Authentication & Security
- **bcrypt**  
  Used to hash user passwords and compare hashed passwords during login
- **jsonwebtoken (JWT)**  
  Used to authenticate APIs by signing and verifying access tokens

### Middleware & Utilities
- **dotenv**  
  Loads environment variables into `process.env`
- **express-async-handler**  
  Handles exceptions in async Express routes and forwards them to the global error handler

### Database
- **MongoDB**  
  NoSQL database used to store Users and Contacts as JSON documents
- **Mongoose**  
  ODM used to define schemas, models, and interact with MongoDB

### Development & Testing
- **Thunder Client**  
  Lightweight REST API client used to test endpoints within VS Code
- **Nodemon**  
  Automatically restarts the server on file changes during development

---

## 📂 Project Structure

```
src/
├── controllers/
├── services/
├── models/
├── routes/
├── middleware/
├── config/
└── app.js
```

The architecture follows **separation of concerns**:

- Routes handle HTTP endpoints
- Controllers manage request/response logic
- Services handle database operations
- Middleware manages authentication and error handling

---

## 🔐 Authentication Flow

- Users register with a hashed password
- Users log in to receive a JWT access token
- Protected routes require:

```
Authorization: Bearer <token>
```

- Token verification and user resolution are handled via middleware

---

## 📇 Contacts API Features

- Contacts are **scoped to the authenticated user**
- Ownership is enforced at the database query level
- Duplicate contacts per user are prevented using a compound unique index
- Full CRUD support:
  - Create contact
  - Get all contacts
  - Get single contact
  - Update contact
  - Delete contact

---

## ⚠️ Error Handling

- Centralized global error handler middleware
- Handles:
  - Invalid MongoDB ObjectId
  - Validation errors
  - Duplicate key errors
  - Authentication and authorization errors
- Returns consistent JSON error responses

---

## 🧪 API Testing

All APIs are testable using **Thunder Client** with:

- Token reuse
- Positive and negative test cases
- No frontend or manual database setup required

---

## 🚀 Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment variables
Create a `.env` file:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 3) MongoDB credentials (submission requirement)
Create a file named `mongodb_login.txt` and include your MongoDB database username and password.

### 4) Run the server
```bash
npm run dev
```

---

## 🎓 Program Context

This project was developed as part of the  
**MyMahir TalentLabs – Back End Development** program to demonstrate:

- REST API design
- Authentication and authorization
- Database modeling
- Secure coding practices
- Error handling
- API testing

---

## ✅ Status

All required features based on the provided rubric have been implemented and tested successfully.
