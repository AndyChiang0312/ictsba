var table = '<tr><th>日期</th><th>餐單</th></tr>';
var mealCode = ['A餐', 'B餐', 'C餐', 'D餐'];
var meal = ['A餐 粟米肉粒飯', 'B餐 豆腐火腩飯', 'C餐 粟米肉粒飯', 'D餐 梅菜肉餅飯', 'A餐 鮮茄鷄粒飯', 'B餐 免治(豬)肉碎蒸蛋粟米飯', 'C餐 蒜香免治牛撈通粉', 'D餐 雙菇炆眉豆飯', 'A餐 粟米汁豬扒飯', 'B餐 蘑菇汁免治牛南瓜飯', 'C餐 生炒鷄絲撈米粉', 'D餐 鮮茄南瓜鷄心豆飯', 'A餐 香草汁魚柳飯', 'B餐 南瓜蘑菇燴雞球糙米飯', 'C餐 三絲(豬)肉絲撈米粉','D餐 茄子素菜紅腰豆飯'];
var mealNumber = 0;
var chineseWeekday = ['一','二','三','四','五'];
var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var date = new Date().getDate();
var daysInMonth = new Date(year, month, 0).getDate();

for(let i = 1; i <= daysInMonth; i++) {
    var day = new Date(String(month) + '/' + String(i) + '/' + String(year)).getDay();
    if(day == 6 || day == 0) {
        //skipped
    } else {
        if (mealNumber >= meal.length) {
            mealNumber = 0;
        }
        table += '<tr id="' + String(year) + '-' + String(month) + '-' + String(i) + '"><td>' + month +'' + '月' + String(i) + '日 (' + chineseWeekday[day - 1] + ')</td><td>' + meal[mealNumber] + '</td></tr>';
        document.getElementById('thismonthorder').innerHTML = table;
        mealNumber++;
    }
}

document.getElementById(String(year) + '-' + String(month) + '-' + String(date)).style.backgroundColor = "pink";
console.log(String(year) + '-' + String(month) + '-' + String(day));

// console.log('Year: ' + year);
// console.log('Month: ' + month);
// console.log('Day: ' + day);
// console.log('Days in month: ' + daysInMonth);