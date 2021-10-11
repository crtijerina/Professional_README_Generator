// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require("inquirer");
const fs = require("fs");
const fileName = "ThisGeneratesREADME.md"

let licenseBadge = (answers) => {
  if (answers.license === "Apache 2.0 License") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (answers.license === "Eclipse Public License 1.0") {
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (answers.license === "GNU GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (answers.license === "The MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (
    answers.license === "The Do What the Fuck You Want to Public License"
  ) {
    return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
  }
};
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
function writeToFile(fileName, answers) {

    fs.writeFile(
        fileName,
    generateMarkdown(answers),
    licenseBadge,
    (err) => {
      if (err) throw err;
      console.log("You know have the best read me ever!");
    }
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(answers => {
      writeToFile(answers);
      
});

}

// Function call to initialize app
init();
