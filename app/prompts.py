def create_email_prompt(recipient_name: str, purpose: str, tone: str) -> str:
    return f"""
You are a professional email writing assistant.

Generate a complete email based on the following information:

Recipient Name: {recipient_name}
Email Purpose: {purpose}
Tone: {tone}

Requirements:
- Create a clear and professional subject line.
- Start with an appropriate greeting.
- Write a complete email body.
- Match the requested tone.
- Keep the email concise and natural.
- End with a suitable professional closing.
- Do not add explanations outside the email.
- Return only the generated email.

Format:

Subject: <subject>

Dear {recipient_name},

<email body>

Best regards,
AI Email Generator
"""