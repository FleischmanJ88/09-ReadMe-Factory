// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "none":
      return ""
      break;

    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;

    case "Apache 2.0 License":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;

    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;

    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
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

    case "MIT":
      return "(https://opensource.org/licenses/MIT)"
      break;

    case "Apache 2.0 License":
      return "(https://opensource.org/licenses/Apache-2.0)"
      break;

    case "GNU":
      return "(https://opensource.org/licenses/gpl-license)"
      break;

    case "BSD":
      return "(https://opensource.org/licenses/BSD-2-Clause)"
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
  let description = data.description;
  let contents = data.contents;
  let installation = data.installation;
  let usage = data.usage;
  let license = data.license;
  let github = data.github;
  let email = data.email;

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
 
 ## Description of application  
 ${data.contents}
 ## Table of Contents
 * [Description](#description-of-application)
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Questions](#questions)
 
 ## Installation
 ${data.installation}

 ## Usage  
 ${data.usage}
 
 ## License
 This projects uses the ${renderLicenseBadge(data.license)}    
 For more information about this license, visit ${renderLicenseLink(data.license)}
 

 ## Questions
 For questions, take a look at my GitHub account: ${data.github}  
 or email me at: ${data.email}

`;
}

module.exports = generateMarkdown;
