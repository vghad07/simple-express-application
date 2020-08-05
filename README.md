# simple-express-application
Simple express application

# Deployment instrucctions

## Install system and application dependencies

Install "node version >= 10", pm2 (npm install -g pm2)  on the system.
Install all thrid party dependencies: npm install

## Run the application

pm2 start application_one.js <- start the application 1 on 3000
pm2 start application_two.js <- start the application 2 on 4200

## Quests
    ### Deploy the application on the provided system using nginx :
        1. Make the application 1 accesible on <IP Address> 
        2. Make the application 2 accesible on <IP Address>:8888
    ### Dockerize the application 
    ### Deploy it with same requirement as done without docker.