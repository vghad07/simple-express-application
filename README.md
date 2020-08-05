# simple-application

Simple express application

# Deployment instructions

## Install system and application dependencies

    Install "node version >= 10", pm2 (npm install -g pm2)  on the system.
    Install all thrid party dependencies: npm install

## Run the application

#### Start the application 1 on PORT 3000
- [] pm2 start application_one.js 
#### Start the application 2 on PORT 4200
- [] pm2 start application_two.js

## Quests

#### 1. Deploy the application on the provided system using nginx :
- [] 1. Make the application 1 accesible on <IP Address> 
- [] 2. Make the application 2 accesible on <IP Address>:8888
#### 2. Dockerize the application 

#### 3. Deploy it with same requirement as done without docker.