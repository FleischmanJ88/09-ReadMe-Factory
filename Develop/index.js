// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: `What is the title of your project?`,
    name: 'title'
  },
  {
    type: 'input',
    message: 'Please enter a Description of your project:',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Enter your Table of Contents criteria:',
    name: 'contents'
  },
  {
    type: 'input',
    message: 'What are your installation requirements?:',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What is the basic usage intended?:',
    name: 'usage'
  },
  {
    type: 'list',
    message: 'Please pick your license:',
    choices: ['MIT', 'Apache License 2.0', 'The Unilicense', 'None of the above'],
    name: 'license'
  },
  {
    type: 'input',
    message: 'What is your GitHub username:',
    name: 'github'
  },
  {
    type: 'input',
    message: 'What is your preferred email:',
    name: 'email'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md"))
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(
    (data) => { writeToFile("README.md", generateMarkdown(data)) }
  );
}

// Function call to initialize app
init();
