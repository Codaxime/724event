# 724events

## Prerequisites
You need Docker to launch the app or launch each services independently ( MongoDB, FrontEnd and Backend)

## Launch Project

With Docker run command 

`docker-compose up -d`

To stop project run 
`docker-compose down`

## Find API Documentation

You can run the project and go to the [Swagger](http://localhost:8080/api-docs) documentation

## Automation with Cypress

Install Cypress with command
`npm install cypress`


## Bug reporter with machawesome

Install with command 
'npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev'

Configurate Cypress for Mochawesome
In cypress.json add 
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/results",  // Folder where reporter are saved
    "overwrite": false,              // Don't erase previous folder
    "html": true,                    // Generate a HTML reporter
    "json": true                     // Generate a JSON reporter
  }
}

Launch Cypress with open command 
`npx cypress run`
