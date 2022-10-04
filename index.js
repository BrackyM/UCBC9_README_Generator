// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: "What is your title",
    name: 'title'
},
{
    type: 'input',
    message: "What is your description",
    name: 'description'
},
{
    type: 'input',
    message: "What is your tableofContents ",
    name: 'tableofContents'
},
{
    type: 'input',
    message: "What is your installation",
    name: 'installation'
},
{
    type: 'input',
    message: "What is your usage",
    name: 'usage'
},
{
    type: 'list',
    message: "What is your license",
    name: 'license',
    choices: [
        "MIT",
        "BSD"
    ]
},
{
    type: 'input',
    message: "What is your contributing",
    name: 'contributing'
},
{
    type: 'input',
    message: "What is your tests",
    name: 'tests'
},
{
    type: 'input',
    message: "What is your questions",
    name: 'questions'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName , data , (err, data) => {
        err ? console.log(err) : console.log("Success");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers)
        writeToFile("GREADME.md", data)
    })
}

// Function call to initialize app
init();
