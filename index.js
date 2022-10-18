// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title of project',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description of project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Instructions for usage of project',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Project license (if needed)',
        name: 'license',
        choices: ['MIT', 'GPL', 'No License'],
    },
    {
        type: 'input',
        message: 'Contributers, if any',
        name: 'contributers'
    },
    {
        type: 'input',
        message: 'Instructions on how to test project',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'gitHub Username',
        name: 'gitHub Username'
    },
    {
        type: 'input',
        message: 'Email address',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err, data) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log (err)
        } else {
            console.log("successful")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("./finished/generated-README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();