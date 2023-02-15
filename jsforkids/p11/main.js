/*Создать страницу игры с картинкой
(картой сокровищ) и местом, куда будут
Рис. 11.1. Игра «Найди клад!» выводиться сообщения для игрока.
167
2. Выбрать на карте случайную точку, где спрятан клад.
3. Создать обработчик кликов. Каждый раз, когда игрок кликает
по карте, обработчик кликов должен:
• Увеличить счетчик кликов на 1.
• Вычислить, насколько далеко место клика от места, где
спрятан клад.
• Отобразить на странице сообщение для игрока — «горячо»
или «холодно».
• Поздравить игрока, если он кликнул по кладу или вблизи
него, и сообщить, сколько кликов ушло на поиски.*/
let width = 400;
let height = 400;
let clicks = 0;

const getRandomPoint = (maxSize) => {
    return Math.floor(Math.random() * maxSize);
}

let target = {
    x : getRandomPoint(width),
    y : getRandomPoint(height)
}

const getDistance = (evt, target) => {
    let diffX = evt.offsetX - target.x;
    let diffY = evt.offsetY - target.y;
    return Math.sqrt(diffX*diffX + diffY*diffY);
}


const getDistanceHit = (distance) => {
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }   
    if (distance < 10) {
        return "Обожжешься!";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "Горячо";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
            return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }

}

console.log($('p'));
$('img').click((evt) => {
    clicks++
    let distance = getDistance(evt, target);
    $('p').text(getDistanceHit(distance));


})