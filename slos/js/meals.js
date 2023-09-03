var meal = ['鮮茄鷄粒飯', '免治(豬)肉碎蒸蛋粟米飯', '蒜香免治牛撈通粉', '雙菇炆眉豆飯', '粟米汁豬扒飯', '蘑菇汁免治牛南瓜飯', '生炒鷄絲撈米粉', '鮮茄南瓜鷄心豆飯', '香草汁魚柳飯', '南瓜蘑菇燴雞球糙米飯', '三絲(豬)肉絲撈米粉','茄子素菜紅腰豆飯'];
var mealInfoBox = '';

for(let i = 0; i < meal.length; i++) {
    mealInfoBox += '<div class="mealInfo Hflex-center clickable" onclick="window.alert(`努力開發中`);"><div class="mealIntro"><span class="fontsizeTwo"><b>' + meal[i] + '</b></span><br><span class="fontsizeThree" style="color: gray;">點擊查看</span></div><img src="media/photos/meals/' + meal[i] + '.jpg"></div>'
    document.getElementById('mealInfoWrap').innerHTML = mealInfoBox;
}

function claim() {
    window.alert('***ALERT FOR ICT SBA VIEWER***\nSince the meal pictures are collected on the Internet, they might not match the exact meal.');
}

