# 📚 Book Store

A full-stack Book Store web application built using the MERN stack. The platform allows users to browse books, create an account, log in securely, and explore both free and premium books through a clean, responsive interface.

---

## 📸 Preview

### Home Page

![Home](public/assets/Home1.png)

### Home Page

![Home](public/assets/Home2.png)

### Courses

![Courses](public/assets/Courses.png)

### Login

![Login](public/assets/Login.png)

### Contact Us

![Contact Us](public/assets/ContactUs.png)

---

## ✨ Features

- 📖 Browse a collection of books
- 🔐 User Authentication (Signup & Login)
- 🔒 Secure password hashing using bcrypt
- 🍪 Cookie-based authentication
- 📚 Separate Free and Premium book categories
- 🎠 Interactive book slider using Swiper.js
- 🌙 Dark & Light mode support
- 📱 Fully responsive design
- 🔔 Toast notifications for user actions
- ⚡ RESTful API built with Express.js
- 💾 MongoDB database integration using Mongoose

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Vite
- Tailwind CSS
- DaisyUI
- Axios
- React Hook Form
- React Hot Toast
- Swiper.js

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- Cookie Parser
- CORS
- dotenv

---

## 📂 Project Structure

```text
BookStoreProject
│
├── Backend
│   ├── controllers
│   ├── db
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
└── Frontend
    └── BookStoreFrontend
        ├── public
        ├── src
        ├── package.json
        └── vite.config.js
```

---

## 🚀 Run Locally

### Clone the repository

```bash
git clone https://github.com/PiyushKumar888/BookStoreProject.git
```

### Backend

```bash
cd Backend
npm install
npm run dev
```

### Frontend

```bash
cd Frontend/BookStoreFrontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

### Backend

Create a `.env` file inside the Backend folder.

```env
PORT=
MONGODB_URI=
DBNAME=
JWT_SECRET=
ORIGIN=
```

### Frontend

Create a `.env` file inside the frontend project.

```env
VITE_BACKEND_LINK=
```

---

## 🎯 Learning Outcomes

This project helped me gain hands-on experience with:

- Building REST APIs using Express.js
- MongoDB database design with Mongoose
- Authentication and password security
- React Context API
- React Router
- API integration using Axios
- State management in React
- Responsive UI development
- MERN stack project structure

---

## 🚀 Future Improvements

- User profile management
- Book search and filtering
- Wishlist functionality
- Shopping cart
- Online payment integration
- Admin Dashboard
- Book reviews and ratings
- Order management

---

## 👨‍💻 Author

**Piyush Kumar**

Computer Science Engineering Student at IIIT Sonepat

Interested in Full Stack Web Development, MERN Stack, Next.js, and Generative AI.