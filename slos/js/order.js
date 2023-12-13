var table = '<tr><th>日期</th><th>A餐</th><th>B餐</th><th>C餐</th><th>D餐</th><th>選擇</th></tr>'
var meal = ['鮮茄鷄粒飯', '免治(豬)肉碎蒸蛋粟米飯', '蒜香免治牛撈通粉', '雙菇炆眉豆飯', '粟米汁豬扒飯', '蘑菇汁免治牛南瓜飯', '生炒鷄絲撈米粉', '鮮茄南瓜鷄心豆飯', '香草汁魚柳飯', '南瓜蘑菇燴雞球糙米飯', '三絲(豬)肉絲撈米粉','茄子素菜紅腰豆飯'];
//餐的數目必須是4的倍數
var chineseWeekday = ['一','二','三','四','五'];
var mealNumber = 0;

var year = new Date().getFullYear();
var month = new Date().getMonth() + 2;
var date = new Date().getDate();
var daysInMonth = new Date(year, month, 0).getDate();

function yearVerify(month){
    if(month == 13) {
        return year + 1;
    } else {
        return year;
    }
}

function monthVerify(month) {
    if(month == 13) {
        return 1;
    } else {
        return month;
    }
}

document.getElementById('dueDate').innerHTML = String(year) + '年' + String(month - 1) + '月' + String(new Date(year, month - 1, 0).getDate()) + '日';
document.getElementById('orderID').innerHTML = (Math.random() * 10000000000).toFixed();
document.getElementById('orderFormTitle').innerHTML = String(yearVerify(month)) + '年' + String(monthVerify(month)) + '月訂餐表格';

for(let i = 1; i <= daysInMonth; i++) {
    var day = new Date(String(monthVerify(month)) + '/' + String(i) + '/' + yearVerify(month)).getDay();
    if(day >= 1 && day <= 5) {
        if (mealNumber >= meal.length) {
            mealNumber = 0;
        }

        if(meal[mealNumber] == '南瓜蘑菇燴雞球糙米飯' || meal[mealNumber] == '雙菇炆眉豆飯') {
            var A = '<td class="possibleAllergy" id=' + String(year) + '-' + String(monthVerify(month)) +  '-' + String(i) + '-A>' + meal[mealNumber] + '</td>';
        } else {
            var A = '<td id=' + String(year) + '-' + String(monthVerify(month)) +  '-' + String(i) + '-A>' + meal[mealNumber] + '</td>';
        }

        if(meal[mealNumber + 1] == '南瓜蘑菇燴雞球糙米飯' || meal[mealNumber + 1] == '雙菇炆眉豆飯') {
            var B = '<td class="possibleAllergy" id=' + String(year) + '-' + String(monthVerify(month)) +  '-' + String(i) + '-B> ' + meal[mealNumber + 1] + '</td>'
        } else {
            var B = '<td id=' + String(year) + '-' + String(monthVerify(month)) +  '-' + String(i) + '-B> ' + meal[mealNumber + 1] + '</td>'
        }

        if(meal[mealNumber + 2] == '南瓜蘑菇燴雞球糙米飯' || meal[mealNumber + 2] == '雙菇炆眉豆飯') {
            var C = '<td class="possibleAllergy" id=' + String(year) + '-' + String(monthVerify(month)) +  '-' + String(i) + '-C> ' + meal[mealNumber + 2] + '</td>'
        } else {
            var C = '<td id=' + String(year) + '-' + String(monthVerify(month)) +  '-' + String(i) + '-C> ' + meal[mealNumber + 2] + '</td>'
        }

        if(meal[mealNumber + 3] == '南瓜蘑菇燴雞球糙米飯' || meal[mealNumber + 3] == '雙菇炆眉豆飯') {
            var D = '<td class="possibleAllergy" id=' + String(year) + '-' + String(monthVerify(month)) +  '-' + String(i) + '-D> ' + meal[mealNumber + 3] + '</td>'
        } else {
            var D = '<td id=' + String(year) + '-' + String(monthVerify(month)) +  '-' + String(i) + '-D> ' + meal[mealNumber + 3] + '</td>'
        }
        
        table += '<tr><td class="orderDate">' + monthVerify(month) + '月' + String(i) + '日(' + chineseWeekday[day - 1] + ')</td>' + A + B + C + D + '<td><select id= "' + String(year) + '-' + String(monthVerify(month)) +  '-' + String(i) + '-select" onchange="showSelect(' + String(year) + ',' + String(month) + ',' + String(i) + ');"><option value="-">-</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option></select></td></tr>';
        document.getElementById('nextMonthOrder').innerHTML = table;
        mealNumber += 4;
    }
}

function showSelect(y, m, d) {
    var mealLetter = ['A', 'B', 'C', 'D'];
    var selectDate = String(y + '-' + monthVerify(m) + '-' + d);
    var selectValue = document.getElementById(String(y + '-' + monthVerify(m) + '-' + d) + '-select').value;

    for(let i = 0; i < 4; i++) {
        if(mealLetter[i] == selectValue) {
            document.getElementById(String(selectDate + '-' + mealLetter[i])).style.backgroundColor = 'pink';
        } else {
            document.getElementById(String(selectDate + '-' + mealLetter[i])).style.backgroundColor = 'rgba(255,255,255,0.8)';
        }
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
        document.querySelectorAll('#nextMonthOrder td').forEach(el => {
            el.style.backgroundColor = 'rgba(255,255,255,0.8)';
        })
    }
}

function confirmSubmit() {
    if(window.confirm('確定要提交嗎？提交後將無法更改。')){
        window.open('orderSuccess.html', '_self');
    }
} 