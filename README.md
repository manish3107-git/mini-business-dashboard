# mini-business-dashboard
This project is a local business dashboard built using React (frontend) and Express.js (backend). It allows users to enter a business name and location, then displays simulated ratings, reviews, and a dynamic SEO-friendly headline.
# 🌐 Local Business Dashboard – GrowthProAI Assignment

This is a **full-stack web application** built for the **GrowthProAI Full Stack Intern Assignment**. It simulates local business discovery by generating ratings, reviews, and SEO headlines for businesses using frontend forms and backend API logic.

---

## 🚀 Features

- 🔍 Submit business name and location via a form
- ⭐ Auto-generates fake Google ratings and reviews
- 📝 Generates an AI-style SEO headline
- 🔁 Regenerate headline with a button
- 🧼 Clean, centered UI (plain CSS – no Tailwind)
- 🔗 Fully integrated React + Node.js stack

---

## 🧩 Tech Stack

- **Frontend:** React (with plain CSS styling)
- **Backend:** Node.js + Express
- **API Handling:** `fetch()` in React
- **No database required** — simulated backend logic

---

## ⚙️ How to Run the Project

### 1️⃣ Start the Backend API

```bash
cd Backend
npm install
node index.js
Server runs on: http://localhost:5000

2️⃣ Start the React Frontend
bash
Copy
Edit
cd ..
npm install
npm start
App runs on: http://localhost:3000

📌 Sample Output
After submission:

Cool Cafe (Mumbai)
⭐ Rating: 4.5
🗣 Reviews: 127
"Cool Cafe is the Rising Star of Mumbai in 2025"
[ Regenerate SEO Headline ]


