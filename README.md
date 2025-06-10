# DoorWebApp
🔐 LOCK CHECKER – Automated Door Sensor Web App
This is the web interface for an Automated Door Sensor (ADS) project, designed to provide real-time updates on door status using an Arduino and ultrasonic sensor system.

This interface was developed using HTML, CSS, JavaScript, and Vue 3. It is visually responsive, accessible, and designed for easy integration with embedded devices (such as the Arduino Nano 33 IoT) via a locally hosted web server.

🌐 Project Overview

The web app connects to an Arduino-powered system equipped with an ultrasonic sensor. When the door status changes, the app updates dynamically to show:

🔴 LOCKED – when the door is closed

🟢 OPEN – when the door is open

💡 Features

🚪 Real-Time Door Status: Displays LOCKED or OPEN based on sensor input

🟢 🔴 Color-Coded Feedback: Red for locked, green for open

🌈 Modern UI Styling: Tailwind CSS + custom styles for vibrant interface

📱 Responsive Design: Mobile and desktop friendly

🔁 Vue-Powered Navigation: Simple multi-page logic using Vue 3

😂 Easter Eggs: A humorous twist in the FAQ section (for demo purposes)

🧰 Tech Stack

HTML5 – Structure

CSS3 / Tailwind CSS – Styling

JavaScript – Core logic

Vue.js (v3) – Frontend reactivity

📁 File Structure

/webapp
├── webapp2.html   # Main HTML file (entry point)
├── script.js      # Vue logic for navigation & state
├── styles.css     # Custom styling

⚙️ How It Works

An Arduino microcontroller with an ultrasonic sensor detects the door’s position.

The Arduino hosts a local web server.

This web app connects via browser to the Arduino’s IP address.

The status (LOCKED / OPEN) updates based on distance data.

📦 Setup
Clone this repo
git clone https://github.com/PulkietAjmani/DoorWebApp.git

cd lock-checker-webapp

Open webapp2.html in your browser.

(Optional) Integrate into your Arduino sketch if using internal web hosting.

🧪 Notes

The “FAQ” section is intended as a playful Easter egg and can be modified or removed for production use.

The flipper() method simulates door status for demo purposes—replace with dynamic sensor-driven updates when integrating.

🚀 Future Improvements

Push notifications for status change alerts

Cloud integration for remote monitoring

Secure login/authentication

Conversion to full PWA or mobile app





