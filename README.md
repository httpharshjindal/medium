# [Medium Blog Clone](https://medium-tyu9.onrender.com/)
Live Link:https://medium-tyu9.onrender.com/

**Medium Blog Clone** is a replica of the popular Medium Blog platform, allowing users to write and read blogs. This project is built with a **MERN** stack architecture and incorporates modern web technologies for optimal performance and security.

## Features
- 📝 Write, edit, and delete blogs
- 🔍 Search and read blogs
- 🔒 Secure authentication with JWT
- 🛠 Backend validation with Zod
- 📦 Prisma as ORM for seamless database interaction
- 

## Tech Stack
- **Frontend**: [React](https://reactjs.org/)
- **Backend**: [Cloudflare Worker](https://workers.cloudflare.com/)
- **Validation**: [Zod](https://github.com/colinhacks/zod)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Authentication**: JSON Web Tokens (JWT)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. Create a `.env` file in the backend directory with the following environment variables:
   ```bash
   DATABASE_URL=your-postgres-database-url
   JWT_SECRET=your-secret-key
   ```

4. Apply Prisma migrations to set up your database:
   ```bash
   npx prisma migrate dev
   ```

5. Run the frontend and backend development servers:
   ```bash
   cd client && npm start
   cd ../server && npm run dev
   ```

## Usage
- **Frontend**: A React-based responsive UI for users to interact with the platform.
- **Backend**: Cloudflare Worker handles all API requests for the blog system, with Zod for data validation and JWT for secure user sessions.

## Deployment
To deploy this project, you'll need to:
- Host the frontend on platforms like **Vercel** or **Netlify**.
- Deploy the backend using **Cloudflare Workers**.
  
## License
This project is licensed under the MIT License.
