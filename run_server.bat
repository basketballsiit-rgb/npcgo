@echo off
title NPC_GO Server
color 0A
echo =======================================
echo     Starting NPC_GO Vehicle System...
echo =======================================
echo.
cd /d "C:\xampp\htdocs\npcgo"

echo Checking if node modules are installed...
if not exist "node_modules\" (
    echo Installing dependencies...
    npm install
)

echo.
echo Server is starting... Please wait a few seconds.
echo Once ready, you can close this black window if you want (but it will stop the server).
echo If you want to keep it running, just minimize this window.
echo.
echo Access the website at: http://localhost:3000
echo.

npm run dev
