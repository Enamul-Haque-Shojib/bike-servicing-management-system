# Bike Servicing Management System

A backend system for managing bike servicing operations, including customer creation, bike records, service history, and status tracking. Built with Prisma ORM and PostgreSQL, this system supports CRUD operations and status management for servicing workflows.

### 🔗 Live API
Base URL: [https://bike-service-api.up.railway.app](https://bike-service-api.up.railway.app)

### 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- tsx (for dev server)
- Railway (deployment)

### ⚙️ Setup Guide

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/bike-service-api.git
   cd bike-service-api
2. Install dependencies:
    ```bash
    npm install
3. Set up .env file:
    ```env
    DATABASE_URL=your_postgres_url_here
4. Run Prisma migrations:
    ```bassh
    npx prisma migrate dev --name init
5. Start the server:
    ```bash
    npm run dev
6. The server will run on http://localhost:3000 by default.




### ✅ 5. **Key Features**

Bullet-point list of what API/system can do.

**Example:**

### 🚀 Key Features

- 🧾 Customers are created with name,email and phone uniqueness
- 🏍 Bike records linked to customers
- 🛠 Service record management (create, update, complete)
- 📅 Status filtering (pending/in-progress/done services)
- 📤 API to fetch overdue or incomplete services (older than 7 days)
- ✅ Enum mapping for clean status values like `in-progress`
- 🌐 RESTful API with proper error handling and response structure
