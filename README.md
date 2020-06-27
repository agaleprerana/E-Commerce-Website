# E-Commerce-Website

# npm packages to be installed
-> In root folder
    npm install
    npm start
    npm i react-router-dom

 1. npm i dotenv
 2. npm i mongoose
 3. npm i validator
 4. npm i bcryptjs
 5. npm i jsonwebtoken
 6. npm i body-parser
 7. npm i react-router-dom

-> In frontend-react folder
 1. npm i axios
 2. npm i redux react-redux
 3. npm i js-cookie

-> In backend folder
 1. npm init
 2. npm i express
 3. npm i @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev


# Some edits in files

1) In root folder create:
  .babelrc
  {
      "presets":[
          [
              "@babel/preset-env"
          ]
      ]
  }

2) package.json(root folder)

 "scripts":{
     "start": nodemon --watch backend --exec babel-node backend/server.js
 };

3) package.json(frontend-react folder) add:
 
 "proxy":"https://127.0.0.1:5000",


# Steps to run the project

1. Start mongodb server by using 'mongod' command
2. In root folder run 'npm start' command
3. In frontend-react folder run 'npm start


# To create admin
 Enter the following url in browser:

  http://localhost:5000/api/users/createadmin
  
 Only admin can add, edit and delete the products as follow:
 
 
