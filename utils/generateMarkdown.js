// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projTitle}


## Description
${data.projDesc}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contribute)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.projInstall}

## Usage
${data.projUsage}

## License
${data.license} 

## Contribute
${data.projContribute}

## Tests
${data.projTest}

## Questions
${data.projGit}
${data.projEmail}

`;
}

module.exports = generateMarkdown;
