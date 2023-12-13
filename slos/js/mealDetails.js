document.getElementById('mealName').innerHTML = window.sessionStorage.getItem('meal');

document.getElementById('mealPhotoInDetail').innerHTML = '<img src=' + 'media/photos/meals/' + window.sessionStorage.getItem('meal') + '.jpg>';