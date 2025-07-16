from flask import Flask, render_template, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Usa un modelo sencillo por ahora
chatbot = pipeline("text-generation", model="gpt2")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    respuesta = chatbot(user_message, max_length=60, num_return_sequences=1)[0]['generated_text']
    return jsonify({'response': respuesta})

if __name__ == '__main__':
    app.run(debug=True)