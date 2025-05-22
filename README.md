Book Review RESTful API
A backend API built with Node.js, Express.js, PostgreSQL, and Prisma ORM, allowing users to register, log in, and manage book reviews with secure JWT-based authentication.

Features :
User registration & login (JWT Authentication)

Add and view books (with filters, search, pagination)

Add, update, and delete book reviews

View book details with average rating and paginated reviews

Secure access to protected endpoints

Search books by title or author (partial, case-insensitive)

Tech Stack:

Node.js + Express.js

PostgreSQL

Prisma ORM

JWT for authentication

bcryptjs for password hashing

dotenv for environment configuration

Project Setup
1. Clone the project
   git clone https://github.com/your-username/book-review-api.git
   cd book-review-api
2. Install Dependiences
   npm install
3. Config Enviroment Variables
   create .env file in you project root
   DATABASE_URL="postgres url"
   JWT_SECRET="your_jwt_secret"
   PORT=5000
4. Set Up Prisma & Migrate Database
   npx prisma migrate dev --name init
   npx prisma generate

Run Locally :
 npm run dev

API endpoints (using Thunder/Postman)

Auth
POST /signup
{ "username": "john", "email": "john@example.com", "password": "123456" }

POST /login
{ "email": "john@example.com", "password": "123456" }

Books
POST /books (auth required)
{ "title": "Atomic Habits", "author": "James Clear", "genre": "Self-help" }
GET /books?page=1&limit=10&author=James Clear&genre=Self-help

GET /books/:id

GET /search?query=habits

Reviews

POST /books/:id/reviews (auth required)
{ "rating": 4, "comment": "Very helpful!" }

PUT /reviews/:id (auth required)
{ "rating": 5, "comment": "Updated: Absolutely loved it!" }

DELETE /reviews/:id (auth required)




