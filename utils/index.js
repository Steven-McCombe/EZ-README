// DONE: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projTitle",
        message: "Enter the title of your project:",
        default: "README"
    },
    {
        type: "input",
        name: "projDesc",
        message: "Please give a brief description of you project:",
        default: "N/A"
    },
    {
        type: "input",
        name: "projInstall",
        message: "Are there any additional installation requirements? Please enter:",
        default: "N/A"
    },
    {
        type: "input",
        name: "projUsage",
        message: "Provide instructions and examples on how to use this project:",
        default: "N/A"
    },
    {
        type: "input",
        name: "projContribute",
        message: "Provide instructions on how to contribute to this project:",  
        default: "N/A"
    },
    {
        type: "input",
        name: "projTest",
        message: "Do you have any tests for the application? Please provide instructions on how to run them:", 
        default: "N/A"
    },
    {
        type: "list",
        name: "projLicense",
        message: "Please Choose a License",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", `"BSD 2-Clause "Simplified" License"`, `"BSD 3-Clause "New" or "Revised" License"`, "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v3.0", "Mozilla Public License 2.0", "The Unlicense"],
        default: ""
    },
    {
        type: "input",
        name: "projGit",
        message: "What is your github username?",
        default: "N/A"
    },
    {
        type: "input",
        name: "projEmail",
        message: "What is your email address?",
        default: "noemail@nomail.com"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, generateMarkdown(data), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log(`${fileName} Created!`);
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
      const fileName =
        answer.projTitle
          .split(' ')
          .join('') + '.md';
      
      writeToFile(fileName, answer);
    });
}
// Function call to initialize app
init();
