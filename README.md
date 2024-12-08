# Ebook Management System 📚

An **Ebook Management System** developed using **Spring Boot** for the backend, **React** for the frontend, **AWS S3** for file storage, and **Axios** as middleware. Authentication is managed using **JWT (JSON Web Tokens)**. The system has two modules: **User Module** and **Admin Module**.

## Features ✨

### User Module
- 🔍 **Search and Read Books**: Access a collection of ebooks and read them online.
- 📚 **Reading List Management**: Add books to a personalized reading list.

### Admin Module
- 📚 **Manage Books**: Add, edit, or delete books.
- 🛠 **User Management**: Manage registered users, their roles, and access levels.
- ✅ **Full Access to All Functionalities**: Perform all user functionalities and admin-exclusive tasks.

---

## Tech Stack 🛠

| Technology       | Purpose                          |
|------------------|----------------------------------|
| **React**        | Frontend Development            |
| **Spring Boot**  | Backend Development             |
| **MySQL**        | Database Management             |
| **AWS S3**       | File Storage                    |
| **Axios**        | Middleware for API Communication |
| **JWT**          | Secure Authentication           |

---

## Project Structure 📂

### Backend
- **Controllers**: Handle incoming requests.
- **DTO**: Managing database to application object structure.
- **Services**: Contain business logic.
- **Repositories**: Interface with the MySQL database.
- **AWS S3 Integration**: For storing book files and images.

### Frontend
- **React Components**: Modular and reusable UI components.
- **State Management**: Efficiently handles the app state using React Hooks.
- **Axios**: Facilitates communication between frontend and backend.

---

## Installation & Setup 🚀

### Prerequisites
- Java 17+
- Node.js & npm
- MySQL Database
- AWS S3 Bucket
- Maven

Clone the repository:
   ```bash
   git clone https://github.com/balajich004/Edusource.git
   ```
***Note***: Please make sure you go through both readme files in Edusource-frontend and Edusource-backend for project setup
