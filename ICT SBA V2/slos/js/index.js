const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();


document.getElementById('date').innerHTML = year + "年" + month + "月" + day + "日";
document.getElementById('thisMonth').innerHTML = month + "月訂餐";