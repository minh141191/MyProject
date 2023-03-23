class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    } getHeight() {
        return this.height;
    } getArea() {
        return this.width * this.height;
    } getPerimeter() {
        return (this.width + this.height)*2;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
}


let myRectangle = new Rectangle(200,50);
let width = myRectangle.getWidth();
let height = myRectangle.getHeight();

myRectangle.setWidth(10);
myRectangle.getWidth();

document.write(myRectangle.getArea());


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
ctx.fillStyle='#07C8F5FF';
ctx.fillRect(10, 10, width, height)