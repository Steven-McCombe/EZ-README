// DONE: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");


// DONE: Create an array of questions for user input
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

// DONE: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, generateMarkdown(data), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log(`${fileName} Created!`);
      });
}

// DONE: Create a function to initialize app
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
