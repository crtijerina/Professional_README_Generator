// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const fileName = "ThisGeneratesREADME.md";


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input", // done
    name: "namer",
    message: "What is the name of your project",
  },
  {
    type: "input", // done
    name: "description",
    message: "Enter a detail description about your project.",
  },
  {
    type: "input", // done
    name: "builtwith1",
    message: "List one technology use in the project.",
  },
  {
    type: "input", // done
    name: "builtwith2",
    message: "List another technology use in the project.",
  },
  {
    type: "input", // done
    name: "install",
    message: "List the steps on how to install your project.",
  },
  {
    type: "input", // done
    name: "usage",
    message: "How can this project be used? User persective.",
  },
  {
    type: "input", // done
    name: "contribution",
    message:
      "Enter any guildlines on how the user can contibute to your project.",
  },
  {
    type: "input", // done
    name: "test",
    message: "How can your project be tested?",
  },
  {
    type: "list", // need to add on selection
    name: "license",
    message: "Please select any of the following license for your project.",
    choices: [
      "Apache 2.0 License",
      "Eclipse Public License 1.0",
      "GNU GPL v3",
      "The MIT License",
      "The Do What the Fuck You Want to Public License",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "What is your github user name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const answers = data
  fs.writeFile(fileName, generateMarkdown(answers), (err) => {
    if (err) throw err;
    console.log("You know have the best read me ever!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("ThisGeneratesREADME.md", answers);
  });
}

// Function call to initialize app
init();
