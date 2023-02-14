/* exercice #1
$('html').mousemove((evt) => {

    $('h1').offset({
        left : evt.pageX,
        top : evt.pageY
    })
})
*/
//exercice #2
let directs = ['left', 'top'];
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
setInterval(() => {
    moveElem($('h1'))   
}, 10);

