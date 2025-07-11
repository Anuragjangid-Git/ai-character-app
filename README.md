# 🤖 Interactive AI Character (SAM)

An AI-powered interactive web character built with **React.js**, **Spring Boot**, and **Gemini AI**, capable of understanding user input, classifying sentiment, and reacting with context-aware animations.

---

## 📌 Overview

**SAM (Smart Animated Model)** is a full-stack application that creates an engaging, real-time interactive experience with a digital character. The application takes user input, processes it using **Gemini AI's NLP capabilities**, and triggers responsive behavior through animations and UI updates.

---

## ✨ Key Features

- 🧠 **Natural Language Understanding** using Gemini AI
- 😊 **Sentiment Analysis** to classify user emotions and adapt reactions
- 🎭 **Dynamic Animations** triggered based on user intent and tone
- 💬 **Real-Time Interaction** between user and character via API calls
- 📱 **Responsive UI** with modern design using Tailwind CSS

---

## 🛠️ Tech Stack

| Layer        | Technology Used                              |
|--------------|-----------------------------------------------|
| Frontend     | React.js, Tailwind CSS, HTML5                |
| Backend      | Spring Boot (Java), REST APIs                |
| AI Engine    | Gemini AI API (Text analysis + sentiment)    |
| UI Logic     | Conditional animation rendering + state mgmt |

---

## 📐 Architecture Flow

User Input
↓
React Frontend → Axios → Spring Boot API → Gemini AI API
↓
Emotion Classification + AI Response
↓
React Character Component updates animation + displays text

---

## 🧪 How It Works

1. The user types a message into the UI.
2. The message is sent to the backend using Axios.
3. Spring Boot processes and forwards the request to Gemini AI with predefined prompt templates.
4. Gemini AI responds with:
   - Interpreted emotion (happy, confused, excited, etc.)
   - Suggested reply or reaction
5. The frontend receives the data and:
   - Displays the response message
   - Triggers a corresponding animation in the AI character

---
Future Enhancements

🧏‍♀️ Voice input and speech output using Web Speech API

🌐 Multi-language support

🪄 Emotion-based avatar customization

📊 Sentiment history tracker for users
---
👤 Author
Anurag Jangid
---
Acknowledgements
Google Gemini API

Spring Boot

React.js

Tailwind CSS

yaml
Copy
Edit
