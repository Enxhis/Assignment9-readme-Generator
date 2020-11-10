const inquirer = require("inquirer");
const fs = require("fs");
const readme = "README.md";
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of this project? ",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description of this project: ",
        name: "description"
    },
    {
        type: "input",
        message: "Provide installation instructions for this project: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide usage information for this project: ",
        name: "usage"
    },
    {
        type: "input",
        message: "Provide the contributors for this project: ",
        name: "contribution"
    },
    {
        type: "input",
        message: "Provide testing instructions for this project: ",
        name: "testing"
    },
    {
        type: "input",
        message: "Provide licence used for this project (MIT/ BSD/ GPL): ",
        name: "license",
    },
    {
        type: "input",
        message: "Provide your GitHub username: ",
        name: "gitName"
    },
    {
        type: "input",
        message: "Provide your email: ",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            throw err
        } else {
            console.log("Successfully created a new README.md file!");
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(userdata => writeToFile(readme, userdata));
}

// function call to initialize program
init();
