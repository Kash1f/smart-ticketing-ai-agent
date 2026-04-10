# 🧠 Smart Ticket AI Agent System

An AI-powered ticketing system that automatically analyzes, prioritizes, and assigns tickets using Gemini LLM. Built with a modern full-stack architecture and event-driven workflows for scalability and performance.

---

## 🚀 Features

- 🤖 AI-powered ticket analysis using Gemini
- 🏷️ Automatic ticket categorization & prioritization
- 👨‍💻 Smart assignment based on user skills
- 🔄 Event-driven architecture with Inngest
- ⚡ Background job processing (async workflows)
- 🔐 Role-based access (Admin, Moderator, User)
- 📧 Automated email notifications
- 📊 Scalable and production-ready design

---

## 🏗️ Tech Stack

**Frontend**
- React

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**AI & Workflows**
- Gemini (LLM)
- Inngest (event-driven workflows)

**DevOps**
- Docker

---

## ⚙️ How It Works

1. User submits a ticket  
2. Event is triggered via Inngest  
3. AI agent (Gemini) analyzes the ticket  
4. Metadata is generated:
   - Priority  
   - Status  
   - Required skills  
   - Helpful notes  
5. Ticket is automatically assigned to the best-fit moderator  
6. Background workers handle async tasks (emails, processing)

---

## 📂 Project Structure

- /ai-frontend → React frontend
- /ai-server → Express backend
- /models → MongoDB schemas
- controllers - Backend logic
- /inngest → Event-driven workflows
- /utils → Helper functions (mailer, ai-agent pipeline)

## 🧪 Setup & Installation

### Clone the repo
```bash
git clone https://github.com/your-username/smart-ticket-ai.git
cd smart-ticket-ai
cd server && npm install
cd ../client && npm install

# Backend
cd server
npm run dev

# Frontend
cd client
npm start
```
## 🙏 Acknowledgments
- Google Gemini AI for LLM capabilities
- Inngest for event-driven workflows
- MongoDB for scalable database
- React community for excellent frontend tools
