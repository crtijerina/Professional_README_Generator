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
function generateMarkdown(answers) {
console.log(answers);

  return `<h1>
      ${answers.namer}
  </h1>
  ${licenseBadge(answers)}
  <h2>
      Table of Contents
  </h2>
  <ol>
      <li><a href="#about" style= "text-decoration:none">About the Project</a></li>
      <li><a href="#installation" style= "text-decoration:none">Installation</a></li>
      <li><a href="#usage" style= "text-decoration:none">Usage</a></li>
      <li><a href="#license" style= "text-decoration:none">Contributing</a></li>
      <li><a href="#contributing" style= "text-decoration:none">Contributing</a></li>
      <li><a href="#tests" style= "text-decoration:none">Tests</a></li>
      <li><a href="#contact" style= "text-decoration:none">Contact</a></li>
  </ol>
      
  <h2 id="about">
      About the Project
  </h2>
      
  <p>
      ${answers.description}
  </p>
  <h3>Built With</h3>
  <ul>
      <li>${answers.builtwith1}</li>
      <li>${answers.builtwith2}</li>
  </ul>
      
  <h2 id="installation">
      Installation
  </h2>
      
  <p>
      ${answers.install}
  </p>
      
  <h2 id="usage">
      Usage
  </h2>
      
  <p>
      ${answers.usage}
  </p>
  <h2 id="license">
      License
  </h2>
      
  <p>
      Distributed under ${answers.license}.
  </p>
  <p>
      Please click on the LICENSE badge at the top for more information.
  </p>
  <h2 id="contributing">
      Contributing
  </h2>
      
  <p>
      ${answers.contribution}
  </p>
  <h2 id="tests">
      Tests
  </h2>
      
  <p>
      ${answers.test}
  </p>
  <h2 id="contact">
      Contact
  </h2>
  <p>For any questions, please contact via GitHub or email.</p>
      
  <ul>
      <li>Github Profile: https://github.com/${answers.github}</li>
      <li>Email: ${answers.email}</li>
  </ul>`;
}

module.exports = generateMarkdown;
