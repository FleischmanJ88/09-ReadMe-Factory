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
    type: 'input',
    message: 'How can you contribute?:',
    name: 'contributing'
  },
  {
    type: 'list',
    message: 'Would you like to test your updates?:',
    name: 'tests',
    choices: ['Yes', 'No', 'Yolo'],
  },
  {
    type: 'input',
    message: 'Do you have any questions for the creator?:',
    name: 'question'
  },
  {
    type: 'list',
    message: 'Please pick your license:',
    choices: ['MIT', 'Apache 2.0 License', 'GNU', 'N/A'],
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
