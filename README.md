# simple-application

Simple express application

# Deployment instructions

## Install system and application dependencies

    Install "node version >= 10", pm2 (npm install -g pm2)  on the system.
    Install all thrid party dependencies: npm install

## Run the application

#### Start the application 1 on PORT 3000
    pm2 start application_one.js 
#### Start the application 2 on PORT 4200
    pm2 start application_two.js

## Quests

#### 1. Deploy the application on the provided system using nginx :
    1. Make the application 1 accesible on <IP Address> 
    2. Make the application 2 accesible on <IP Address>:8888
#### 2. When i reboot the instance the server should start automatically. 
#### 3. Dockerize the application 
#### 4. Deploy it with same requirement as done without docker.
#### 5. Set up autoscaling group on AWS so that when this instance stops or terminates a new instance is created with the same set up. 
#### 6. Deploy the application in AWS EKS.