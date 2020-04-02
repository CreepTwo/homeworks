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
    saving: true 
};




function chooseExpenses(){
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
}

chooseExpenses();

function detectDayBudget() {                                            
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Ежедневный бюджет ‚ " + appData.moneyPerDay + "руб");
}
detectDayBudget();




function detectLevel() {                                                
    if (appData.moneyPerDay < 100) {
        console.log ("минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log (" высокий уровень достатка");
    } else {
        console.log ("произошла ошибка");
    }
}
detectLevel();




function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Сумма накоплений?"),
            percent = +prompt("Какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход составил : " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {                            

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();