<div align="center">

# ✦ AI Email Generator

### ✨ AI-Powered Email Writing Assistant

Generate clear, polished and professional emails in seconds using **FastAPI** and **Groq LLM**.

<br>

<img src="https://img.shields.io/badge/FastAPI-0F766E?style=for-the-badge&logo=fastapi&logoColor=white">
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/Groq-111827?style=for-the-badge&logo=groq&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<br><br>

<img src="https://readme-typing-svg.demolab.com?font=DM+Sans&weight=600&size=24&duration=2500&pause=800&color=8B6F5A&center=true&vCenter=true&width=700&lines=Write+Better+Emails%2C+Effortlessly.;AI-Powered+Email+Generation;FastAPI+%2B+Groq+LLM">

</div>

<br>

---

## ✦ About The Project

**AI Email Generator** is a lightweight AI-powered web application designed to help users create professional emails from a few simple inputs.

The user provides:

- 👤 **Recipient Name**
- 📝 **Email Purpose**
- 🎯 **Tone**

These details are sent to a **Groq-powered Large Language Model**, which generates a complete email containing:

- A suitable subject
- Appropriate greeting
- Clear email body
- Professional closing

The application combines a **FastAPI backend** with a clean and responsive frontend to provide a simple and practical AI writing experience.

<br>

---

## ✨ Features

### 🤖 AI Email Generation

Generate complete and polished emails using an LLM.

### 👤 Recipient Personalization

Provide the recipient's name to make the generated email more natural.

### 📝 Purpose-Based Generation

Describe what you want to communicate and let AI create the message.

### 🎨 Multiple Writing Tones

Choose between:

- Professional
- Friendly
- Formal

### 📋 Copy Generated Email

Copy the generated email instantly with one click.

### 🌓 Dark Mode

Switch between light and dark themes for a comfortable writing experience.

### 🔢 Character Counter

Track the length of the email-purpose input while typing.

### 🧹 Clear Form

Reset all input fields instantly.

### ⏳ Loading State

Displays a visual loading state while the AI is generating the email.

### 📱 Responsive Design

The interface adapts to desktop, tablet and mobile screens.

### 🔐 Environment Variables

API credentials are stored securely using environment variables instead of source code.

<br>

---

## 🧠 How It Works

The application follows a simple AI generation workflow:

```text
┌───────────────────────┐
│       User Input      │
│                       │
│  Recipient Name       │
│  Email Purpose        │
│  Tone                 │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│      FastAPI          │
│       Backend         │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│    Prompt Builder     │
│      prompts.py       │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│       Groq LLM        │
│   openai/gpt-oss-20b  │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│   Generated Email     │
│                       │
│  Subject              │
│  Greeting             │
│  Body                 │
│  Closing              │
└───────────────────────┘
```

<br>

---

## 🛠️ Tech Stack

### Backend

- **Python**
- **FastAPI**
- **Pydantic**
- **Jinja2**
- **python-dotenv**
- **Groq SDK**

### Frontend

- **HTML5**
- **CSS3**
- **JavaScript**

### AI

- **Groq API**
- **openai/gpt-oss-20b**

<br>

---

## 📁 Project Structure

```text
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
```

<br>

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/haniaeman2026-pixel/AI-Email-Generator.git
```

### 2. Open the Project

```bash
cd AI-Email-Generator
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

### 4. Activate the Environment

**Windows PowerShell:**

```powershell
venv\Scripts\activate
```

### 5. Install Dependencies

```bash
python -m pip install -r requirements.txt
```

<br>

---

## 🔐 Environment Configuration

Create a `.env` file in the project root directory.

Add your Groq API key:

```env
GROQ_API_KEY=your_groq_api_key_here
```

> ⚠️ **Important:** Never upload your real `.env` file or API key to GitHub.

The repository includes `.env.example` as a safe configuration template.

<br>

---

## ▶️ Run the Application

Start the FastAPI development server:

```bash
uvicorn app.main:app --reload
```

Once the server starts, open:

```text
http://127.0.0.1:8000
```

The AI Email Generator interface will then be available in your browser.

<br>

---

## 🔌 API Endpoints

### `GET /`

Displays the main AI Email Generator interface.

### `GET /api/health`

Checks whether the application is running.

Example response:

```json
{
    "status": "online",
    "service": "AI Email Generator",
    "model": "openai/gpt-oss-20b"
}
```

### `POST /api/generate-email`

Generates an email using the provided recipient name, purpose and tone.

Example request:

```json
{
    "recipient_name": "Sarah Khan",
    "purpose": "Request a meeting to discuss the upcoming project.",
    "tone": "Professional"
}
```

Example response:

```json
{
    "success": true,
    "email": "Generated email content..."
}
```

<br>

---

## 🎯 Example Use Case

### Input

**Recipient Name**

```text
Sarah Khan
```

**Email Purpose**

```text
Request a meeting to discuss the upcoming project.
```

**Tone**

```text
Professional
```

### Output

The AI generates a complete professional email based on the provided information.

The generated message includes a suitable:

- Subject
- Greeting
- Email body
- Closing

<br>

---

## 🔒 Security

The application follows basic security practices for handling API credentials.

- API keys are loaded through environment variables.
- `python-dotenv` is used for environment configuration.
- `.env` is excluded from Git tracking.
- `.env.example` provides a safe configuration template.
- Virtual environment files are also excluded.

Protected files include:

```text
.env
venv/
__pycache__/
*.pyc
```

<br>

---

## 🌱 Future Improvements

Possible future enhancements include:

- 📧 Direct email sending
- 💾 Save generated emails
- 📚 Email history
- 🎯 Additional writing tones
- 🌍 Multi-language email generation
- ✨ Advanced prompt controls
- 👤 User authentication
- 📊 Usage analytics

<br>

---

## 💡 Learning Objectives

This project demonstrates practical implementation of:

- FastAPI application development
- REST API endpoints
- Pydantic request validation
- Prompt engineering
- LLM integration
- Environment variable management
- Frontend and backend communication
- Asynchronous JavaScript requests
- Git and GitHub workflow

<br>

---

<div align="center">

### ✦ Built with Python, FastAPI & Groq

<br>

<img src="https://readme-typing-svg.demolab.com?font=DM+Sans&weight=600&size=22&duration=2500&pause=900&color=8B6F5A&center=true&vCenter=true&width=500&lines=Developed+by+Hania+Eman;AI+%26+Data+Science+Student">

<br><br>

⭐ **If you find this project useful, consider giving it a star!**

</div>
