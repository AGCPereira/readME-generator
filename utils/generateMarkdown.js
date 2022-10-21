// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      }
      if (license === 'GPL') {
        return '[![License: GPL](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      }
      if (license === 'no license') {
        return '';
      }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (license === 'MIT') {
    return `MIT`
  }
  if (license === 'GPL') {
    return 'GPL'
  } 
  if (license === 'no license') {
    return '';
    }}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'license') {
        return `${renderLicenseLink(license)}`;
        } 
        if (license !== 'no license') {
          return ' ';
        }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
    
  ## Description
  ${data.description}
     
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#license)
  * [Contributing](#contributers)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ## Installation
  What is needed to run project/application
  ${data.installation}
    
  ## Usage
  How to use application
  ${data.usage}
    
  ## License
  Project is licesened under
  ${renderLicenseSection(data.license)}
  
  ## Contributors
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Contact Info for any questions
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;