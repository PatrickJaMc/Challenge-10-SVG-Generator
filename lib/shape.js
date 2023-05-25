class Shape{
    constructor(backgroundColor, text, textColor){
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
    setColor(backgroundColor){
        this.backgroundColor = backgroundColor;
    }
    setText(text){
        this.text = text
    }
    setTextColor(textColor){
        this.textColor = textColor;
    }

    
};

module.exports = Shape;