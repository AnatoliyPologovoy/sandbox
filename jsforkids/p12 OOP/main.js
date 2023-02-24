function Car (x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;

    this.drawCar = function () {
        let carHtml = '<img src="http://nostarch.com/images/car.png">';
        this.carElement = $(carHtml);
        this.carElement.css({
            position: "absolute",
            left: this.x,
            top: this.y
        });
        $("body").append(this.carElement);
    }
    this.moveRight = function (speed) {
        //this.x += 5;
        this.carElement.css({
        left: this.x += speed,
        top: this.y
        });
       };
    this.moveLeft = function (speed) {
        //this.x -= 5;
        this.carElement.css({
        left: this.x -= speed,
        top: this.y
        });
       };
    this.moveUp = function (speed) {
        //this.y -= 5;
        this.carElement.css({
        left: this.x,
        top: this.y -= speed
        });
       };
    this.moveDown = function (speed) {
        //this.y += 5;
        this.carElement.css({
        left: this.x,
        top: this.y += speed
        });
       };
};
/*
let drawCar = function (car) {
    let carHtml = '<img src="http://nostarch.com/images/car.png">';
    let carElement = $(carHtml);
    carElement.css({
        position: "absolute",
        left: car.x,
        top: car.y
    });
    $("body").append(carElement);
};*/

let tesla = new Car(100, 200);
let nissan = new Car(100, 50);
tesla.drawCar();
nissan.drawCar();

const randomSpeed = (max) => {
    return Math.random() * max;
}
let nissanMoveId = setInterval(()=>{
    nissan.moveRight(randomSpeed(5))
}, 30)
let teslaMoveId = setInterval(()=>{
    tesla.moveRight(randomSpeed(5))
}, 30)