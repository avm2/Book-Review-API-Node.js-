# 📚 Book Library API – MERN Stack Project

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing a collection of books. It includes user authentication and provides APIs to create, update, delete, and retrieve books.

---

## 🚀 How to Start the Project

### 🔧 Prerequisites

Make sure you have the following installed:

- **Node.js** and **npm**
- **MongoDB** (local or cloud-based like MongoDB Atlas)
- **Git** (to clone the repository)
- **Postman** or similar (for API testing)

---

### 🖥️ Backend Setup (Express + MongoDB)

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/book-library-mern.git
   cd book-library-mern/backend


# Books
| Route | HTTP Verb	 | Post Body	 | Description	 |
| --- | --- | --- | --- |
| /api/books | `GET` | Empty | List all books. |
| /api/books | `POST` | {'name':'The Lord of the Rings', 'category':'Epic', 'publisher':'Metis Yayınları', 'year':1954, 'likes': 9157, 'author_id':"id"} | Create a new book. |
| /api/books/:book_id | `GET` | Empty | Get single book. |
| /api/books/:book_id | `PUT` | {'category':'History', 'year':2000} | Update a book with new info. |
| /api/books/:book_id | `DELETE` | Empty | Delete a book. |
| /api/books/top/:top_id | `GET` | Empty | Get the top books with your limit. |
| /api/books/year/:start_year/:end_year | `GET` | Empty | Books between two dates. |


# Index
| Route | HTTP Verb	 | POST Body	 | Description	 |
| --- | --- | --- | --- |
| /register | `POST` | { username: 'loremipsum', password:'1234' } | Create a new user. |
| /authenticate | `POST` | { username: 'loremipsum', password:'1234' } | Generate a token. |

