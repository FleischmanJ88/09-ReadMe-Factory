// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: ` \u001b[32m(1 of 9) What is the title of your project?`,
    name: 'title'
  },
  {
    type: 'input',
    message: '\u001b[32m(2 of 9)Please enter a Description of your project:',
    name: 'description'
  },
  {
    type: 'input',
    message: '\u001b[32m(3 of 9)Enter your Table of Contents criteria:',
    name: 'contents'
  },
  {
    type: 'input',
    message: '\u001b[32m(4 of 9)What are your installation requirements?:',
    name: 'installation'
  },
  {
    type: 'input',
    message: '\u001b[32m(5 of 9)What is the basic usage intended?:',
    name: 'usage'
  },
  {
    type: 'list',
    message: '\u001b[32m(6 of 9)Please pick your license:',
    choices: ['MIT', 'GnuPL', '(None)'],
    name: 'license'
  },
  {
    type: 'input',
    message: '\u001b[32m(8 of 9)What is your GitHub username:',
    name: 'github'
  },
  {
    type: 'input',
    message: '\u001b[32m(9 of 9)What is your preferred email:',
    name: 'email'
  }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    console.log(err ? err : "successfully added!");
  })
}
// TODO: Create a function to initialize app
function init() {
  inq.prompt(questions)
    .then(response => {
      writeToFile('sample_readme.md', JSON.stringify(response));
    });
}
// Function call to initialize app
init();
