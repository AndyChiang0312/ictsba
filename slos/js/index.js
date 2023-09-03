var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var date = new Date().getDate();
var day = new Date(String(month) + '/' + String(date) + '/' + String(year)).getDay();
var chineseWeekday = ['日', '一','二','三','四','五','六'];

function confirmLogout() {
    if(window.confirm('確定要登出嗎？')){
        window.open('../login.html', '_self');
    }
}

document.getElementById('todayDate').innerHTML = String(year) + '年' + String(month) + '月' + String(date) + '日(星期' + String(chineseWeekday[day]) + ')';
