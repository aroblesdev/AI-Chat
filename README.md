# 🤖 AI Chatbot Web with Flask and Transformers

A simple chatbot based on Hugging Face language models with a web interface built using HTML and Flask. Designed as an extensible foundation and POC for learning and experimenting with chatbots and language models.

---

## 🚀 Features

- Flask backend server
- Language model using Hugging Face's `transformers` (default: `gpt2`)
- Web interface with HTML + JS
- Basic CSS styling
- Ready to run locally

---

## 📁 Project Structure

| Path                         | Description                      |
|------------------------------|----------------------------------|
| `AI-Chat/`                   | Project root directory           |
| ├── `app.py`                 | Main Flask server                |
| ├── `requirements.txt`       | Dependencies file                |
| ├── `templates/`             | HTML templates                   |
| │   └── `index.html`         | Chatbot web interface            |
| ├── `static/`                | Static files (CSS, JS)           |
| │   └── `style.css`          | Interface CSS styles             |
| └── `README.md`              | Project documentation            |


## ⚙️ Requirements

- Python 3.8+
- pip
- Recommended: virtual environment (`venv`)

---

## 🛠️ Installation Guide

### 1. Project Setup
```bash
# Create and enter project directory
mkdir AI-Chat
cd AI-Chat

# Create virtual environment
# Linux/Mac:
python3 -m venv venv
source venv/bin/activate

# Windows:
python -m venv venv
venv\Scripts\activate
```

### 📦 2. Install Dependencies

### Recommended Option (using requirements.txt)
echo "flask
transformers
torch" > requirements.txt

```bash
pip install -r requirements.txt 
```

### Manual Option
```bash
pip install flask transformers torch
```

## 🛠️ 3. Run the Server

```bash
python app.py

Access in your browser: http://127.0.0.1:5000
```

**Note: This project is not intended for production, but rather for educational and development purposes. The generated answers may not be accurate or appropriate for all contexts.**