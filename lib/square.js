const Shape = require('../assets/shape');

class Square extends Shape{
    
    renderSVG(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill=${this.backgroundColor}/>
        <text fill=${this.textColor} x="150" y="125" font-size="60" text-anchor="middle" ${this.text}/>`
    }
};

module.exports = Square;