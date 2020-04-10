'use strict';

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemF = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    apple = document.querySelector('#prompt');


menu.insertBefore(menuItem[2], menuItem[1]);


menuItemF.classList.add('menu-item');                          
menuItemF.textContent = "Пятый пункт";                       
menu.appendChild(menuItemF);   

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.textContent = 'Мы продаем только подлинную технику Apple!';


let Opinion =  prompt("Какое ваше отношение к технике Apple?");
apple.textContent = Opinion;

adv.remove();
