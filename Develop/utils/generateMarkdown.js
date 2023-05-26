// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return "You have a license!";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "None") {
    return "";
  } else {
    return `[![License]https://img.shields.io/badge/license-${license}blue.svg](https://opensource.org/licenses)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `${data.tableOfContents}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

${data.tableOfContents}

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

This project has the below License
${data.license}

## Tests

${data.test}

## Questions

${data.questions}

- [Github](#Github)
${data.github}
- [E-Mail](#E-Mail)
${data.email}
`;
}

module.exports = generateMarkdown;
