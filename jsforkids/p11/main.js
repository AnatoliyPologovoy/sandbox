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
let width = 800;
let height = 800;
let clicks = 0;
let attempt = 50;

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
    if (distance < 10) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }   
    if (distance < 15) {
        return "Обожжешься!";
    } else if (distance < 25) {
        return "Очень горячо";
    } else if (distance < 50) {
        return "Горячо";
    } else if (distance < 100) {
        return "Тепло";
    } else if (distance < 200) {
        return "Холодно";
    } else if (distance < 420) {
        return "Очень холодно";
    } else if (distance < 600) {
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }

}

$('img').click((evt) => {
    clicks++
    if (attempt > 0) {
        let distance = getDistance(evt, target);
        console.log(distance);
        $('p').text(getDistanceHit(distance ) + '. Remaining attemts: ' + attempt);
    }
    else {
        $('p').text('Game over');
    }
    attempt--
})