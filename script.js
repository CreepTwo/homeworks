'use strict';

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');




let money, time;


startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while(isNaN(money) || money =="" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();
});

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



 




