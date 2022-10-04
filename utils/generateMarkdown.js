// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-blue.svg`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `![GitHub License](${renderLicenseBadge(license)})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
console.log(data);
return `
${renderLicenseLink(data.license)}

# ${data.title}

## Table of Contents
 [Description](#description)

 [Installation](#installation)

 [Usage](#usage)

 [Contributions](#contributions)

 [Testing](#testing)

 [Questions](#questions)

## Description

${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License

## Contributions
${data.contributing}

## Testing
${data.tests}

## Questions
For any questions on the repository or the application please reach me at one of the following:

* ${data.user} - [Github](https://github.com/${data.githubUsername})
* ${data.user} - [Email](mailto:${data.email})




`}

module.exports = generateMarkdown;
