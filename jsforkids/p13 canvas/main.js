let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d'); // получение контекста рисования — это JavaScript-объект
/*ctx.fillStyle = "red"; //стиль цвета заливки
ctx.fillRect(10, 10, 20, 20); // квадрат
ctx.strokeStyle = 'blue'; //стиль цвета линии
ctx.lineWidth = 10; // толщина
ctx.strokeRect(20, 20, 100, 30); //пустой прямоугольник


ctx.strokeStyle = 'yellow';
ctx.lineWidth = 5;
ctx.moveTo(10,10);
ctx.lineTo(50, 50);
ctx.stroke(); // экранирование линии
ctx.beginPath(); // beginPath() определяет начало рисования нового пути,
// без него первая линия станет зеленой и толщиной 15
ctx.strokeStyle = 'green';
ctx.lineWidth = 15;
ctx.moveTo(50,10);
ctx.lineTo(10, 50);
ctx.stroke();

ctx.lineWidth = 1;
ctx.strokeStyle = 'transparent';
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(100,50);
ctx.lineTo(125, 30);
ctx.lineTo(150, 50);
ctx.lineTo(150, 100);
ctx.lineTo(100, 100);
ctx.fill(); //заливка
ctx.stroke(); // отрисовка

ctx.lineWidth = 2;
ctx.strokeStyle = 'lightblue';
ctx.beginPath();

ctx.arc(50,50,20,0,Math.PI, false);
ctx.fill();
ctx.stroke();*/

let circle = function (x, y, radius, isFill = false) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (isFill) ctx.fill();
    ctx.stroke();
};

const drawSnowMan = (x, y) => {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    circle(x + 20,y + 20, 20); // head // 100 100
    circle(x + 20,y + 70, 30); //body
    circle(x + 12,y + 12, 2, true);
    circle(x + 28,y + 12, 2, true);
    circle(x + 20,y + 85, 2, true);
    circle(x + 20,y + 70, 2, true);
    circle(x + 20,y + 55, 2, true);
    ctx.fillStyle = 'orange';
    ctx.strokeStyle = 'orange';
    circle(x + 20,y + 21, 2, true);
}

drawSnowMan(50,50);


