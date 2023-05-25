const Shape = require('../lib/shape');

class Triangle extends Shape{
    
    renderSVG(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 186 56, 182" fill="${this.backgroundColor}"/>
        <text fill="${this.textColor}" x="150" y="125" font-size="60" text-anchor="middle"> ${this.text}</text>
        </svg>`
    }
};

module.exports = Triangle;