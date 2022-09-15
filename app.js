let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomDiceImage = 'dice' + randomNumber1 + '.png';
let imageSource = 'images/' + randomDiceImage;
let image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src', imageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = `dice${randomNumber2}.png`;
let imageSource2 = `images/${randomDiceImage2}`;
let image2 = document.querySelectorAll('img')[1];

image2.setAttribute('src',imageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = 'player 1 win';
}
else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = 'player 2 win'
}
else{
    document.querySelector('h1').innerHTML = 'draw'
}

const btn = document.getElementById('btn');

//button to refresh the page
btn.addEventListener('click', function(){
   image1.style.transform = 'rotateZ(180deg)';
   image2.style.transform = 'rotateZ(180deg)';
   location.reload()
});