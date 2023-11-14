# Steps to run the application:

 
Step 1 - Run the following command to install the necessary dependencies 

    npm i vite json-server bootstrap axios react-router-dom

Step 2 - Set the execution policy to CurrentUser 

    Set-ExecutionPolicy -Scope CurrentUser

Step 3 - Run the following command to start the JSON server. Once the server is up, click on the link displayed in the terminal to see the database in the browser.

    json-server --watch src/db.json

**Note: Do not close the terminal in which the JSON server is running. Open a new terminal and proceed to Step 4.**

Step 4 - Run the following command to start the application. Once the application is up,click on the link displayed in the terminal to see the application in the browser.

    npm run dev
