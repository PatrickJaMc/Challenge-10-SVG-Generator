// const Shape = require('../lib/shape');
const Circle = require('../lib/circle');
const Square = require('../lib/square');
const Triangle = require('../lib/triangle');

function renderSVG(answers){
    let shape = undefined;
    if(answers.shape === 'Circle'){
        shape = new Circle(answers.backgroundColor, answers.text, answers.textColor)
    } else if (answers.shape === 'Square'){
        shape = new Square(answers.backgroundColor, answers.text, answers.textColor);
    } else if (answers.shape === 'Triangle'){
        shape = new Triangle(answers.backgroundColor, answers.text, answers.textColor);
    }

    return shape.renderSVG();


}

module.exports = renderSVG;