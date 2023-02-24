let offsetLeft = 0;
let offsetTop = 0;

const moveElem = (elem) => {
    elem.offset({
        left : offsetLeft, 
        top: offsetTop,
    })
    if (offsetLeft < 200 && offsetTop == 0 ) {
        offsetLeft++;
    }
    if (offsetLeft >= 200) {
        offsetTop++;
    }
    if (offsetTop >= 200) {
        offsetLeft--;
    }
    if (offsetLeft == 0) {
        offsetTop--;
    }
}

let h1 = $('h1');
h1.text('Try cath me');
h1.css({ 'cursor' : 'pointer'});
let speed = 50;
let count = 0;

const setIntervalElemSpeed = (elem, speed) => {
    return idInterval = setInterval(() => {
        moveElem(elem)
    }, speed);
}

let moveId = setIntervalElemSpeed(h1, speed);

h1.click(() => {
    count++
    clearInterval(moveId);
    if (count < 10) {
        speed /= 3;
        h1.text('You caught me: ' + count + ' times')
        moveId = setIntervalElemSpeed(h1, speed);
    }
    else {
        h1.text('YOU WIN!')
    }

})

