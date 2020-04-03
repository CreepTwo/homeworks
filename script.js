'use strict';

let money, time;


function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money =="" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget : money,
    timeData : time,
    expense: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expense[a] = b;
            }else{
                i = i - 1;
            }   
        };
    },
    detectDayBudget : function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Ежедневный бюджет ‚ " + appData.moneyPerDay + "руб");
    },
    detectLevel : function(){
        if (appData.moneyPerDay < 100) {
            console.log ("минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log (" высокий уровень достатка");
        } else {
            console.log ("произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.saving == true) {
            let save = +prompt("Сумма накоплений?"),
                percent = +prompt("Какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход составил : " + appData.monthIncome);
        }
    },
    chooseOptExpenses : function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }    
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if(typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log('error');
        }else{
            console.log("done");
            appData.income = items.split(', ');
            appData.income.push(prompt("Что нибудь еще?"));
            appData.income.sort();
        }
       

        appData.income.forEach (function (itemmassive , i){
            alert("Способы доп. заработка: " +  (i+1) + " - " + itemmassive)
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}




