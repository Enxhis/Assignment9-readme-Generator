// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Licence Badge
  ![License badge](https://img.shields.io/badge/license-${data.license}-green)

  ## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Licence](#licence)
  4. [Tests](#testing)
  5. [Contribution](#contribution)
  6. [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licence
  ${data.license}
  *  ![License badge](https://img.shields.io/badge/license-${data.license}-green)

  ## Tests
  ${data.testing}

  ## Contribution
  ${data.contribution}

  ## Questions
  * If you have questions, email me at: ${data.email},
  * GitHub Profile link: https://github.com/${data.gitName}
`;
}

module.exports = generateMarkdown;
