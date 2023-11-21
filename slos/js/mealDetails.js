for(let i = 0; i <= document.getElementsByClassName('mealName').length; i++) {
    document.getElementsByClassName('mealName')[i].innerHTML = window.sessionStorage.getItem('meal');
}