
$('h1').text('Мои друзья');
let friends = ['Костян', 'Андрей', 'Роман'];
let body = $('body');
/*
friends.forEach((name) => {
    body.append('<p>' + name +'</p>');
    //p.hide().fadeIn(1000);
    console.log($('p').text())
});*/

for (let i = 1, count = 500; i < 6; i++) {
    $('h1').fadeOut(count).fadeIn(count);
    count += 500;
}

body.append('<p>text by hide within delay</p>')
$('p').fadeTo(500, 0.2).delay(5000).fadeTo(500, 1);

