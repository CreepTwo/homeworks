'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget : money,
    timeData : time,
    expense: {},
    optionalExpenses: {},
    income: [],
    saving: false, 
};

let f0 = prompt("Введите обязательную статью расходов в этом месяце"),
    c0 = prompt("Во сколько обойдется?"),
    f1 = prompt("Введите обязательную статью расходов в этом месяце"),
    c1 = prompt("Во сколько обойдется?");

appData.expense[f0] = f1;
appData.expense[c0] = c1;

alert(appData.budget / 30);