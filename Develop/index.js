// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter your Project Description",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Type in Table of Contents",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the Installation procedure",
  },
  {
    type: "input",
    name: "usage",
    message: "Explain how to use your project",
  },
  {
    type: "list",
    name: "license",
    message: "Mention your License to the project",
    choices: ["MIT", "GNU", "Apache", "None"],
  },
  {
    type: "input",
    name: "credits",
    message: "Who are all contributed to your project",
  },
  {
    type: "input",
    name: "tests",
    message: "Explain how to test/run your project",
  },
  {
    type: "list",
    name: "questions",
    message: "What is your medium of communication to reach you with questions?",
    choices: ["Github", "E-mail"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter Your Github UserName: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Your E-mail Id: ",
  },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created readme.md!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readMePageContent = generateMarkdown(answers);

    writeToFile("readme.md", readMePageContent);
  });
}

init();
