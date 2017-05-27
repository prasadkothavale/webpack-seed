# Readme
This is a seed project which is preconfigured with Express.js, Angular 2 with webpack and bootstrap material design. Download it as zip or use git to checkout this project.

## Installation
Open terminal / cmd in this folder (root folder of project)
```
npm install
cd ui
npm install
```
## Development Mode
In development phase Express.js will run on http://localhost:3000 with services on http://localhost:3000/service and Angular 2 UI will run on http://localhost:3001. To run in development mode open terminal / cmd in this folder (root folder of project)
```
npm start
```
This will start Express.js services, open another terminal / cmd in this folder (root folder of project)
```
cd ui
npm start
```
This will start Angular 2 UI. Hence development mode will run two instances of node server on port 3000 and 3001

## Production Mode
In production mode webpack will bundle all Angular 2 + Bootstrap css, js and other static files in /public folder which is static folder for Express.js. To run webpack open terminal / cmd in this folder (root folder of project)
```
cd ui
npm run build
```
Once webpack in build in /public folder to start Express.js open terminal / cmd in this folder (root folder of project)
```
npm start
```
Hence development mode will run onc instance of node server on port 3000 which will serve both Express.js and Angular 2 UI