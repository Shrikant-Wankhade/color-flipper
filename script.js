
const colors = ['green','blue','red','brown','pink'];
const btn = document.querySelector('#button');
const color = document.querySelector('.color');



btn.addEventListener('click',function (){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
     
});


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

