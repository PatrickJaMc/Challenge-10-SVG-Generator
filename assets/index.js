const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like your logo to be',
      choices: ['Circle',
                'Square',
                'Triangle']
    },

    {
      type: 'input',
      name: 'backgroundColor',
      message: 'Enter the color you wish the SVG to be',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter three letters you would like within your SVG logo',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color you wish the SVG text to be',
      }

  ])
  .then((answers) => {
    const readMe = renderSVG(answers);

    fs.writeFile('README.md', readMe, (err) =>
      err ? console.log(err) : console.log('Successfully created README')
    );
  });