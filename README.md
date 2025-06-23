<h1 align="center">⏱️ Stopwatch Web App</h1>

<p align="center">
  <img src="https://img.shields.io/github/repo-size/SamratDesai7/StopWatch?style=for-the-badge" />
  <img src="https://img.shields.io/github/languages/top/SamratDesai7/StopWatch?style=for-the-badge" />
  <img src="https://img.shields.io/github/last-commit/SamratDesai7/StopWatch?style=for-the-badge" />
</p>

---

## 📌 Overview

**StopWatch** is a lightweight, responsive web-based stopwatch made using **HTML**, **CSS**, and **JavaScript**. It allows users to:

- Start ⏯️
- Pause ⏸️
- Reset 🔁  
the timer with an intuitive interface — all without refreshing the page.

This is a great beginner-friendly project to understand **DOM manipulation**, **event handling**, and **time intervals**.

---

## ✨ Features

| Feature       | Description                                         |
|---------------|-----------------------------------------------------|
| ▶️ Start       | Begins the stopwatch and tracks elapsed time        |
| ⏸ Pause       | Temporarily stops the timer                        |
| 🔄 Reset       | Resets the timer to `00:00:00`                      |
| 📱 Responsive  | Works on mobile and desktop                        |
| ⚡ Real-time   | Smooth and accurate interval updates                |

---

## 🛠️ Tech Stack

| Tech        | Usage                       |
|-------------|-----------------------------|
| **HTML5**   | Base structure               |
| **CSS3**    | Styling, layout, responsiveness |
| **JavaScript (ES6)** | Timer logic and event-driven interactivity |

---

## 🧠 How It Works

- Uses `setInterval()` to increment time in seconds
- Converts seconds → hours:minutes:seconds format
- Updates the DOM in real-time
- `clearInterval()` used to pause/reset the stopwatch

---

## 📂 Folder Structure

```bash
StopWatch/
├── index.html      # UI structure
├── style.css       # Styling & layout
├── script.js       # Timer logic
└── README.md

