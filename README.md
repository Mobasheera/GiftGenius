# 🎁 GiftGenius - AI Powered Gift Recommendation System

GiftGenius is an AI-powered, RAG-based gift recommendation system designed to help users find the perfect gift based on interests, budget, and occasion. Built for a 24-hour hackathon, this project leverages Retrieval-Augmented Generation (RAG), MySQL and a modern web stack to deliver personalized gift suggestions.

---

## 🚀 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL (Hosted on Railway.app)
- **AI Model:** Retrieval-Augmented Generation (RAG)

---

## 🎯 Features

✅ Smart AI-based gift recommendations  
✅ Filters based on **budget, interests, and occasion**  
✅ Responsive & user-friendly UI  
✅ Hosted on **GitHub Pages (Frontend)** & **Railway (Database & Backend)**

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/GiftGenius.git
cd GiftGenius
```

### 2️⃣ Run the Frontend (Static Website)

Simply open `index.html` in a browser or deploy using **GitHub Pages.**

---

## 🗄️ Database Setup (For Backend Devs)

Our MySQL database is hosted on **Railway.app.** Below are the connection details:

```plaintext
Host: gondola.proxy.rlwy.net
User: root
Password: **************
Database: railway
Port: ******
```

To check database tables, run:

```sql
SHOW TABLES;
```

---

## 🔗 API Endpoints (Backend Devs)

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/categories` | Fetch all gift categories |
| GET | `/gifts/:categoryId` | Fetch gifts by category |
| POST | `/search` | Store user search queries |

*These API endpoints allow the frontend to fetch real-time gift recommendations.*

---

## 🚀 Deployment

- **Frontend:** Hosted on **GitHub Pages**
- **Backend:** To be hosted on **Railway.app** or **Render**
- **Database:** Hosted on **Railway MySQL**

---

## 👨‍💻 Contributors

- **Frontend Developer:** Gyanendra Dubey
- **Backend Developer:** Shashwat Shukla
- **AI/ML Developer:** Avanish Mishra
- **Database & Deployment:** Mobashshir Ahsan

---

## 📜 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---
