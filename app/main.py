from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from dotenv import load_dotenv
from groq import Groq
import os

from app.prompts import create_email_prompt


# Load environment variables
load_dotenv()

# Get Groq API key
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY is not configured in the .env file.")

# Initialize Groq client
client = Groq(api_key=GROQ_API_KEY)

# Create FastAPI application
app = FastAPI(
    title="AI Email Generator",
    description="Generate professional emails using Groq LLM.",
    version="1.0.0"
)

# Static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# HTML templates
templates = Jinja2Templates(directory="templates")


# Request model
class EmailRequest(BaseModel):
    recipient_name: str
    purpose: str
    tone: str


# Home page
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="index.html"
    )


# Health check
@app.get("/api/health")
async def health_check():
    return {
        "status": "online",
        "service": "AI Email Generator",
        "model": "openai/gpt-oss-20b"
    }


# Generate email
@app.post("/api/generate-email")
async def generate_email(data: EmailRequest):

    prompt = create_email_prompt(
        recipient_name=data.recipient_name,
        purpose=data.purpose,
        tone=data.tone
    )

    response = client.chat.completions.create(
        model="openai/gpt-oss-20b",
        messages=[
            {
                "role": "system",
                "content": "You are an expert professional email writer."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.7,
        max_tokens=700
    )

    generated_email = response.choices[0].message.content

    return {
        "success": True,
        "email": generated_email
    }