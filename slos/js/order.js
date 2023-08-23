var table = '<tr><th>日期</th><th>星期</th><th>A餐</th><th>B餐</th><th>C餐</th><th>D餐</th></tr>'
var meal = ['鮮茄鷄粒飯', '免治(豬)肉碎蒸蛋粟米飯', '蒜香免治牛撈通粉', '雙菇炆眉豆飯', '粟米汁豬扒飯', '蘑菇汁免治牛南瓜飯', '生炒鷄絲撈米粉', '鮮茄南瓜鷄心豆飯', '香草汁魚柳飯', '南瓜蘑菇燴雞球糙米飯', '三絲(豬)肉絲撈米粉','茄子素菜紅腰豆飯'];
var chineseWeekday = ['一','二','三','四','五'];
var mealNumber = 0;

var year = new Date().getFullYear();
var month = new Date().getMonth() + 2;
var date = new Date().getDate();
var daysInMonth = new Date(year, month, 0).getDate();

document.getElementById('dueDate').innerHTML = String(year) + '年' + String(month) + '月' + '25日';
document.getElementById('orderID').innerHTML = (Math.random() * 10000000000).toFixed();

for(let i = 1; i <= daysInMonth; i++) {
    var day = new Date(String(month) + '/' + String(i) + '/' + String(year)).getDay();
    if(day == 6 || day == 0) {
        //skipped
    } else {
        if (mealNumber >= meal.length) {
            mealNumber = 0;
        }
        table += '<tr><td>' + month + '月' + String(i) + '日</td><td>' + chineseWeekday[day - 1] + '</td><td><label for="' + String(year) + String(month) + String(i) + 'A">' + meal[mealNumber] + '</label><input type="radio" id="' + String(year) + String(month) + String(i) + 'A" name="' + String(year) + String(month) + String(i) + '" required></td><td><label for="' + String(year) + String(month) + String(i) + 'B">' + meal[mealNumber + 1] + '</label><input type="radio" id="' + String(year) + String(month) + String(i) + 'B" name="' + String(year) + String(month) + String(i) + '" required></td><td><label for="' + String(year) + String(month) + String(i) + 'C">' + meal[mealNumber + 2] + '</label><input type="radio" id="' + String(year) + String(month) + String(i) + 'C" name="' + String(year) + String(month) + String(i) + '" required></td><td><label for="' + String(year) + String(month) + String(i) + 'D">' + meal[mealNumber + 3] + '</label><input type="radio" id="' + String(year) + String(month) + String(i) + 'D" name="' + String(year) + String(month) + String(i) + '" required></td></tr>';
        document.getElementById('nextMonthOrder').innerHTML = table;
        mealNumber += 4;
    }
}

function confirmExit() {
    if(window.confirm('確定要離開嗎？訂餐記錄將不會保存。')) {
        window.open('index.html', '_self');
    }
}

function confirmReset() {
    if(window.confirm('確定要重設嗎？訂餐記錄將會清空。')) {
        document.getElementById('nextMonthOrderForm').reset();
    }
}

function confirmSubmit() {
    if(window.confirm('確定要提交嗎？提交後將無法更改。')){
        document.getElementById('nextMonthOrderForm').submit();
    }
} 