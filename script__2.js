let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    pink = document.querySelectorAll('.circle__pink'),
    onePink = document.querySelector('.circle__pink'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = '#FAFAFA';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for(let i = 0; i < pink.length; i++){
//     pink[i].style.backgroundColor = 'blue';
// }

// pink.forEach(function(item, i, pinks){
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Yeeee');

div.classList.add('black');

//document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h1>hello amigo</h1>';
div.textContent = 'Hello Amigos'

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(pink[1]);

document.body.replaceChild(btn[1], circle[1]);
