window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');       

        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = '2018-11-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));


        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }


    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num){
                if(num <= 9){
                    return '0' + num;
                } else return num;
            };


            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

        }

    }


    setClock('timer', deadline);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы свяжемся с вами!',
        failure: 'Упс! Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        function sendForm(elem) {
            elem.addEventListener('submit', function(e) {
                e.preventDefault();
                    elem.appendChild();
                    let formData = new FormData(elem);
    
                    function postData(data) {
                        return new Promise(function(resolve,reject) {
                            let request = new XMLHttpRequest();
                            request.open('POST', 'server.php');
                            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                            request.onreadystatechange = function () {
                                if(request.readyState < 4) {
                                    resolve()
                                }else if (request/this.readyState === 4) {
                                    if(request.status == 200 && request.status < 3){
                                        resolve()
                                    }
                                    else{
                                        reject()
                                    }
                                }
                            }

                            request.send(data);
                        })
                    } //End postData

                    function clearInput() {
                        for(let i = 0; i < input.length; i++) {
                            input[i].value = '';
                        }
                    }

                    postData(formData)
                         .then(() => statusMessage.innerHTML = message.loading)
                         .then(()=> {
                             thanksModal.style.display = 'block';
                             mainModal.style.display = 'none';
                             statusMessage.innerHTML = '';
                         })
                         .catch(() => statusMessage.innerHTML = message.failure)
                         .then(clearInput)
            });
        }

        sendForm(form);
        sendForm(formBottom);
    

});







































//     // Options

//     class Options {
//         constructor(height, width, bg, fontSize, textAlign) {
//             this.height = height;
//             this.width = width;
//             this.bg = bg;
//             this.fontSize = fontSize;
//             this.textAlign = textAlign;
//         }

//         createDiv() {
//             let elem = document.createElement('div');
//             document.body.appendChild(elem);
//             let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
//             elem.style.cssText = param;
//         }
//     }

//     const item = new Options(300, 350, "red", 14, "center");
//     item.createDiv();

// 



// let age = document.getElementById('age');
 
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
 
// showUser.apply(age, ["Горький","Максим"]);