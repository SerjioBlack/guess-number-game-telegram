# Guess Number Game Telegram Bot

This repository contains a simple "Guess the Number" game implemented as a Telegram bot with a WebView frontend. The bot allows users to play the game directly within the Telegram app. The frontend is deployed on Netlify, while the backend is hosted on Vercel.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Setup the Environment](#setup-the-environment)
- [Backend Deployment (Vercel)](#backend-deployment-vercel)
  - [Deploying to Vercel](#deploying-to-vercel)
- [Frontend Deployment (Netlify)](#frontend-deployment-netlify)
  - [Deploying to Netlify](#deploying-to-netlify)
- [Telegram Bot Setup](#telegram-bot-setup)
  - [Create a New Bot with BotFather](#create-a-new-bot-with-botfather)
  - [Set Web App Domain](#set-web-app-domain)
- [Final Steps](#final-steps)
- [Usage](#usage)
- [License](#license)

## Prerequisites

Before you start, make sure you have the following:

- Node.js and npm installed
- A GitHub account
- A Vercel account (for backend deployment)
- A Netlify account (for frontend deployment)
- A Telegram account to create and manage your bot

## Getting Started

### Clone the Repository

First, clone this repository to your local machine:

git clone https://github.com/SerjioBlack/guess-number-game-telegram
cd guess-number-game-bot

## Setup the Environment
Create a .env file in the root directory of the project and add your Telegram bot token:

TELEGRAM_BOT_TOKEN=your-telegram-bot-token

Replace your-telegram-bot-token with the token you get from BotFather (details in Telegram Bot Setup).

## Backend Deployment (Vercel)
Deploying to Vercel
Create a Vercel account: Go to Vercel and sign up.

Connect your GitHub repository:

In the Vercel dashboard, click on "New Project" and select your GitHub repository.
Follow the prompts to import the project.
Configure Environment Variables:

During setup, you'll be asked to add environment variables. Add the following:
TELEGRAM_BOT_TOKEN: Your Telegram bot token.
Deploy:

Click "Deploy" to start the deployment process. Vercel will automatically detect your Node.js backend and deploy it.
Get the Production URL:

Once deployed, note down the production URL provided by Vercel (e.g., https://your-backend.vercel.app).


## Frontend Deployment (Netlify)
Deploying to Netlify
Create a Netlify account: Go to Netlify and sign up.

Connect your GitHub repository:

In the Netlify dashboard, click on "New site from Git" and select your repository.
Follow the prompts to import the project.
Configure Build Settings:

Set the build command to npm run build.
Set the publish directory to build.
Deploy:

Click "Deploy site" to start the deployment process.
Get the Production URL:

Once the site is deployed, note down the URL provided by Netlify (e.g., https://your-frontend.netlify.app).

## Telegram Bot Setup
Create a New Bot with BotFather
Open BotFather in Telegram:

Search for @BotFather in Telegram and start a chat.
Create a new bot:

Use the command /newbot and follow the prompts to name your bot and get the token.
Save the Token:

BotFather will give you a token. Save this token in your .env file under TELEGRAM_BOT_TOKEN.
Set Web App Domain
Set your Web App domain:
Use the command /setdomain in BotFather and provide the URL of your frontend hosted on Netlify (e.g., https://your-frontend.netlify.app).


## Final Steps
Update the Backend URL in Frontend:

Go to your frontend code and replace the local backend URL (e.g., http://localhost:3001) with the production URL provided by Vercel.
Push Changes:

Commit and push any changes made to your GitHub repository. This will automatically trigger redeployment on Netlify.
Usage
To start the game:

Open your Telegram bot.
Type /start to receive a message with a button to start the game.
Click the button to open the game in WebView and start playing.
