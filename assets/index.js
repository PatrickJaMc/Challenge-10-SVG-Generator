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
      name: 'color',
      message: 'Enter the color you wish the SVG to be',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter three letters you would like within your SVG logo',
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter the color you wish the SVG text to be',
      }

  ])
//   .then((answers) => {
//     const { filename, width, height, shape, color, x, y, radius, text, fontSize, textColor } = answers;

//     const logo = new LogoMaker(width, height, filename);

//     if (shape === 'Circle') {
//       logo.drawCircle(width / 2, height / 2, radius, color);
//     } else if (shape === 'Rectangle') {
//       logo.drawRectangle(x, y, width, height, color);
//     }

//     if (text) {
//       logo.drawText(text, x, y, fontSize, textColor);
//     }

//     logo.save();
//   });