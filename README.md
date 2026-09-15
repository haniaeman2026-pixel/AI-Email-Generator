<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Playfair+Display&weight=700&size=38&duration=3000&pause=1000&color=8B6F5A&center=true&vCenter=true&width=800&lines=AI+Email+Generator;Write+Better+Emails%2C+Effortlessly." alt="AI Email Generator"/>

<br/>

<p>
  <strong>✨ AI-powered email writing assistant</strong>
</p>

<p>
  Generate clear, polished and professional emails in seconds using
  <strong>FastAPI</strong> and <strong>Groq LLM</strong>.
</p>

<br/>

<img src="https://img.shields.io/badge/FastAPI-0F766E?style=for-the-badge&logo=fastapi&logoColor=white"/>
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
<img src="https://img.shields.io/badge/Groq-111827?style=for-the-badge&logo=groq&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

</div>

---

## ✦ About The Project

**AI Email Generator** is a lightweight AI-powered web application that helps users create professional emails from a few simple inputs.

The user provides:

- **Recipient Name**
- **Email Purpose**
- **Tone**

The application sends these details to a **Groq-powered Large Language Model**, which generates a complete email containing a suitable subject, greeting, email body, and professional closing.

The project combines a **FastAPI backend** with a clean, responsive frontend to provide a simple and practical AI writing experience.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 AI Email Generation | Generates complete emails using an LLM |
| 👤 Recipient Input | Personalizes the email for the recipient |
| 📝 Purpose Input | Defines what the email should communicate |
| 🎨 Multiple Tones | Professional, Friendly and Formal |
| 📋 Copy Email | Quickly copy the generated email |
| 🌓 Dark Mode | Switch between light and dark themes |
| 🔢 Character Counter | Tracks email-purpose input length |
| 🧹 Clear Form | Reset the form instantly |
| ⏳ Loading State | Displays feedback while AI generates the email |
| 📱 Responsive UI | Works across desktop and mobile screens |
| 🔐 Environment Variables | Keeps API credentials outside the source code |

---

## 🧠 How It Works


User
  │
  ▼
┌───────────────────────┐
│   Web Interface       │
│                       │
│ Recipient             │
│ Purpose               │
│ Tone                  │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│      FastAPI          │
│      Backend          │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│    Prompt Builder     │
│     prompts.py        │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│       Groq LLM        │
│  openai/gpt-oss-20b   │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│   Generated Email     │
│                       │
│ Subject               │
│ Greeting              │
│ Body                  │
│ Closing               │
└───────────────────────┘

🛠️ Tech Stack
Backend
Python
FastAPI
Pydantic
Jinja2
python-dotenv
Groq SDK
Frontend
HTML5
CSS3
JavaScript
AI
Groq API
openai/gpt-oss-20b

📁 Project Structure
AI-Email-Generator/
│
├── app/
│   ├── __init__.py
│   ├── main.py
│   └── prompts.py
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── app.js
│
├── .env
├── .env.example
├── .gitignore
├── requirements.txt
└── README.md

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/haniaeman2026-pixel/AI-Email-Generator.git
2. Open the Project
cd AI-Email-Generator
3. Create a Virtual Environment
python -m venv venv
4. Activate the Environment

Windows PowerShell:

venv\Scripts\activate
5. Install Dependencies
python -m pip install -r requirements.txt
🔐 Environment Configuration

Create a .env file in the project root:

GROQ_API_KEY=your_groq_api_key_here

Important: Never upload your real .env file or API key to GitHub.

The repository includes .env.example as a safe configuration template.

▶️ Run the Application

Start the FastAPI development server:

uvicorn app.main:app --reload

The application will be available at:

http://127.0.0.1:8000
🔌 API Endpoints
GET /

Displays the main AI Email Generator interface.

GET /api/health

Checks whether the application is running.

Example response:

{
  "status": "online",
  "service": "AI Email Generator",
  "model": "openai/gpt-oss-20b"
}
POST /api/generate-email

Generates an email using the provided information.

Example request:

{
  "recipient_name": "Sarah Khan",
  "purpose": "Request a meeting to discuss the upcoming project.",
  "tone": "Professional"
}

Example response:

{
  "success": true,
  "email": "Generated email content..."
}
🎯 Example Use Case

Recipient Name

Sarah Khan

Email Purpose

Request a meeting to discuss the upcoming project.

Tone

Professional

The AI then creates a complete email based on these instructions.

🔒 Security

API credentials are loaded through environment variables using python-dotenv.

The .gitignore file prevents sensitive files such as .env from being committed to the repository.

.env
venv/
__pycache__/
*.pyc

🌱 Future Improvements

Possible future enhancements include:

📧 Direct email sending
💾 Save generated emails
📚 Email history
🎯 More writing tones
🌍 Multi-language email generation
✨ Advanced prompt controls
👤 User authentication
📊 Usage analytics
💡 Learning Objectives

This project demonstrates practical implementation of:

FastAPI application development
REST API endpoints
Pydantic request validation
Prompt engineering
LLM integration
Environment variable management
Frontend and backend communication
Asynchronous JavaScript requests
Git and GitHub workflow
<div align="center">
✦ Built with Python, FastAPI & Groq
<br/> <img src="https://readme-typing-svg.demolab.com?font=DM+Sans&weight=600&size=22&duration=2500&pause=800&color=8B6F5A&center=true&vCenter=true&width=500&lines=Developed+by+Hania+Eman;AI+%26+Data+Science+Student" alt="Developed by Hania Eman"/> <br/>

⭐ If you find this project useful, consider giving it a star!

</div> ```
