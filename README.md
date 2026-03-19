<div align="center">
  <img src="/cookie.png" alt="8-Bit Fortune Cookie" width="120" style="image-rendering: pixelated;"/>
  
  # 🍪 Cookie Challenge (8-Bit Edition)
  
  _Unwrap your daily dose of randomness in full retro glory!_
</div>

## Overview

**Cookie Challenge** is a playful, 8-bit web app that delivers a unique, out-of-the-box daily life challenge every day. Crack open a virtual fortune cookie to reveal an AI-generated quest designed to surprise, amuse, and push you out of your comfort zone. 

Equipped with CRT overlays, twinkling pixel stars, and a retro aesthetic, it's an immersive nostalgic experience.

## Features

- 🎮 **Retro Aesthetic:** Fully pixelated UI, brutalist borders, and a nostalgic CRT monitor effect.
- 🥠 **Avatar Selection:** Choose your cookie avatar (Classic, Macadamia, Dark Choc, Oatmeal, Golden) from an interactive 3D CSS carousel.
- 🤖 **AI-Generated Quests:** Endless fun with varied and creative daily challenges generated on the fly.
- ✨ **Immersive Visuals:** Engaging opening animations and satisfying 8-bit visual feedback.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/cookies-challenge.git
   cd cookies-challenge
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up Environment Variables:**
   Create a `.env` file and add your Google Gemini API key (needed to generate the quests):
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
4. **Run the app locally:**
   ```bash
   npm run dev
   ```
5. **Open in your browser:**
   Visit [http://localhost:4321](http://localhost:4321) (or your configured Astro port).

## Project Structure

- `src/pages/` — Main app pages (`index.astro`, `cookies.astro`, `about.astro`)
- `src/components/` — Reusable components (like the `PixelCookie`)
- `src/layouts/` — Layout templates (includes CRT effects and background stars)
- `src/styles/` — Global styling and 8-bit CSS utilities
- `public/` — Static assets

## Daily Quests

> _[ NEW QUEST UNLOCKED ]_  
> _"Speak only in questions for the next hour!"_

---

<div align="center">
  <em>Made with 🕹️ for fun and fortune!</em>
</div>
