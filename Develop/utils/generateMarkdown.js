// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "none":
      return ""
      break;

    case "Apache 2.0 License":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      break;

    case "The MIT License":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      break;

    case "Boost Software License 1.0":
      return "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)"
      break;

    case "Eclipse Public Licesne 1.0":
      return "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)"
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "none":
      return ""
      break;

    case "Apache 2.0 License":
      return "(https://opensource.org/licenses/Apache-2.0)"
      break;

    case "The MIT License":
      return "(https://opensource.org/licenses/MIT)"
      break;

    case "Boost Software License 1.0":
      return "(https://www.boost.org/LICENSE_1_0.txt)"
      break;

    case "Eclipse Public Licesne 1.0":
      return "(https://opensource.org/licenses/EPL-1.0)"
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `### License: 
    ${renderLicenseBadge(license)}  
    ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let title = data.title;
  let purpose = data.purpose;
  let license = data.license;
  let usage = data.usage;
  let username = data.userName;

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
 
 ## Description of application  
 ${data.purpose}
 ## Table of Contents
 * [Description](#description-of-application)
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [Questions](#questions)
 
 ## Installation
 ${data.install}
 ## Usage  
 ${data.usage}
 
 ## License
 This projects uses the ${data.license} ${renderLicenseBadge(data.license)}    
 For more information about this license, visit ${renderLicenseLink(data.license)}
 
 
 ## Contributing
 ${data.contribute}

 ## Tests
 ${data.tests}
 
 ## Questions
 For questions, take a look at my GitHub account: ${data.gitUserName}  
 or email me at: ${data.email}
`;
}

module.exports = generateMarkdown;


//Used StackOverflow for some help on coding 
//https://stackoverflow.com/questions/67013842/trying-to-place-license-badge-within-readme-md-using-node-js-but-getting-error-a
//https://medium.com/swlh/how-to-make-the-perfect-readme-md-on-github-92ed5771c061
