# 📚 Book Review RESTful API

A backend API built with **Node.js**, **Express.js**, **PostgreSQL**, and **Prisma ORM**, allowing users to register, log in, and manage book reviews with secure JWT-based authentication.

---

## 🚀 Features

- ✅ User registration & login (JWT Authentication)
- 📚 Add and view books (with filters, search, and pagination)
- ✍️ Add, update, and delete book reviews
- 📊 View book details with average rating and paginated reviews
- 🔒 Secure access to protected endpoints
- 🔍 Search books by title or author (partial, case-insensitive)

---

## 🧰 Tech Stack

- **Node.js** + **Express.js**
- **PostgreSQL**
- **Prisma ORM**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **dotenv** for environment variables

---

## 🛠️ Project Setup

### 1. Clone the Project

```bash
git clone https://github.com/your-username/book-review-api.git
cd book-review-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the project root:
```bash
DATABASE_URL="your_postgres_database_url"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

### 4. Set Up Prisma & Migrate the Database
```bash
npx prisma migrate dev --name init
npx prisma generate
```
▶️ Run Locally
```bash
npm run dev
```

📬 API Endpoints (use with Thunder or Postman)
🔐 Auth
➕ POST /signup
Register a new user.
```bash
Request Body:
{
  "username": "john",
  "email": "john@example.com",
  "password": "123456"
}
```
🔑 POST /login
Authenticate and get JWT token.
```bash
Request Body:

{
  "email": "john@example.com",
  "password": "123456"
}
```
📚 Books
➕ POST /books (Authenticated)
Add a new book.
```bash
Request Body:
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-help"
}
```
📄 GET /books
Get books with optional filters and pagination.

Example:
/books?page=1&limit=10&author=James Clear&genre=Self-help
🔍 GET /search?query=habits
Search books by partial title or author (case-insensitive).

🔎 GET /books/:id
Get a book by ID with:

Book details

Average rating

Paginated reviews

✍️ Reviews
➕ POST /books/:id/reviews (Authenticated)
Submit a review for a book.
```bash
Request Body:
{
  "rating": 4,
  "comment": "Very helpful!"
}
```
✏️ PUT /reviews/:id (Authenticated)
Update your review.
```bash
Request Body:
{
  "rating": 5,
  "comment": "Updated: Absolutely loved it!"
}
```
🗑️ DELETE /reviews/:id (Authenticated)
Delete your review.
