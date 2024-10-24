<img width="1151" alt="Screenshot 2024-10-24 at 7 26 54 PM" src="https://github.com/user-attachments/assets/f2cd06d1-8025-4047-893a-a5d8febf016e">
# CRUD with React, Axios, and JSON Server
This repository contains a tutorial on creating a CRUD (Create, Read, Update, Delete) application using React for the frontend, Axios for handling HTTP requests, and JSON Server to simulate a RESTful API. 


Before starting this application, make sure you have the following installed on your system:

`Node.js` and `npm`.\
A code editor such as`Visual Studio Code` 

## Running the Application
1- Clone this repository to your local machine
2- Open a terminal window \
3- You will need to install node package manager and json-server globally on your system. You can do this by running the following commands in your terminal: \
`npm install` and  `npm install -g json-server` \
4- Start the JSON Server to simulate a RESTful API by running the following command:\
`json-server --watch db.json --port 3001`\
This command will start the JSON Server using the db.json file as the data source and expose it at `http://localhost:3001`\
5- Open another terminal window (keeping the first one running,then Start the React application by running the following command: \
 `npm start` \
 
The application will be accessible at `http://localhost:3000` \
The page will reload when you make changes, you may also see any lint errors in the console.
