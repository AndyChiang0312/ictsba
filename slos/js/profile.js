var possibleAllergy = ['南瓜', '豆類'];
var confirmedAllergy = ['花生', '貝殼', '薄荷'];
var possibleAllergyTable = '';
var confirmedAllergyTable = '';
var confirmedAllergyEditing = false;
var possibleAllergyEditing = false;
var passwordShowing = false;


function possibleAllergyUpdate() {
    for (let i = 0; i < possibleAllergy.length; i++) {
        possibleAllergyTable += '<li>' + possibleAllergy[i] + '</li>';
    }
    possibleAllergyTable = '<tr><td><ul>' + possibleAllergyTable + '</ul></td></tr>';
    document.getElementById('possibleAllergy').innerHTML = possibleAllergyTable;
    possibleAllergyTable = '';
}
possibleAllergyUpdate()

function possibleAllergyEdit() {
    if(possibleAllergyEditing) {
        possibleAllergyEditing = false;
        possibleAllergyUpdate();
        document.getElementById('possibleAllergyEditButton').innerHTML = '編輯';
    } else {
        possibleAllergyEditing = true;
        document.getElementById('possibleAllergyEditButton').innerHTML = '完成';
        for (let i = 0; i < possibleAllergy.length; i++) {
            possibleAllergyTable += '<li><div>' + possibleAllergy[i] + '<img src="./media/icons/minus.png" onclick="possibleAllergyDelete(`'+ String(possibleAllergy[i]) +'`)"></div></li>';
        }
        possibleAllergyTable = '<tr><td><ul>' + possibleAllergyTable + '</ul></td></tr>';
        document.getElementById('possibleAllergy').innerHTML = possibleAllergyTable;
        possibleAllergyTable = '';
    }
    
}

function possibleAllergyDelete(food) {
    possibleAllergy.splice(possibleAllergy.indexOf(food), 1);
    document.getElementById('possibleAllergyEditButton').innerHTML = '完成';
        for (let i = 0; i < possibleAllergy.length; i++) {
            possibleAllergyTable += '<li><div>' + possibleAllergy[i] + '<img src="./media/icons/minus.png" onclick="possibleAllergyDelete(`'+ String(possibleAllergy[i]) +'`)"></div></li>';
        }
        possibleAllergyTable = '<tr><td><ul>' + possibleAllergyTable + '</ul></td></tr>';
        document.getElementById('possibleAllergy').innerHTML = possibleAllergyTable;
        possibleAllergyTable = '';
}

function possibleAllergyAdd(food) {
    if(food != null && food != '') {
        possibleAllergy.push(String(food));
        possibleAllergyUpdate();
    } else if(food == '') {
        window.alert('請輸入食物名稱！');
    }
}

function confirmedAllergyUpdate() {
    for (let i = 0; i < confirmedAllergy.length; i++) {
        confirmedAllergyTable += '<li>' + confirmedAllergy[i] + '</li>';
    }
    confirmedAllergyTable = '<tr><td><ul>' + confirmedAllergyTable + '</ul></td></tr>';
    document.getElementById('confirmedAllergy').innerHTML = confirmedAllergyTable;
    confirmedAllergyTable = '';
}
confirmedAllergyUpdate()


function confirmedAllergyEdit() {
    if(confirmedAllergyEditing) {
        confirmedAllergyEditing = false;
        confirmedAllergyUpdate();
        document.getElementById('confirmedAllergyEditButton').innerHTML = '編輯';
    } else {
        confirmedAllergyEditing = true;
        document.getElementById('confirmedAllergyEditButton').innerHTML = '完成';
        for (let i = 0; i < confirmedAllergy.length; i++) {
            confirmedAllergyTable += '<li><div>' + confirmedAllergy[i] + '<img src="./media/icons/minus.png" onclick="confirmedAllergyDelete(`'+ String(confirmedAllergy[i]) +'`)"></div></li>';
        }
        confirmedAllergyTable = '<tr><td><ul>' + confirmedAllergyTable + '</ul></td></tr>';
        document.getElementById('confirmedAllergy').innerHTML = confirmedAllergyTable;
        confirmedAllergyTable = '';
    }
    
}

function confirmedAllergyDelete(food) {
    confirmedAllergy.splice(confirmedAllergy.indexOf(food), 1);
    document.getElementById('confirmedAllergyEditButton').innerHTML = '完成';
        for (let i = 0; i < confirmedAllergy.length; i++) {
            confirmedAllergyTable += '<li><div>' + confirmedAllergy[i] + '<img src="./media/icons/minus.png" onclick="confirmedAllergyDelete(`'+ String(confirmedAllergy[i]) +'`)"></div></li>';
        }
        confirmedAllergyTable = '<tr><td><ul>' + confirmedAllergyTable + '</ul></td></tr>';
        document.getElementById('confirmedAllergy').innerHTML = confirmedAllergyTable;
        confirmedAllergyTable = '';
}

function confirmedAllergyAdd(food) {
    if(food != null && food != '') {
        confirmedAllergy.push(String(food));
        confirmedAllergyUpdate();
    } else if(food == '') {
        window.alert('請輸入食物名稱！');
    }
}

function passwordShowSwitch() {
    if(passwordShowing) {
        passwordShowing = false;
        document.getElementById('password').innerHTML = '*********';
        document.getElementById('passwordShowState').src = 'media/icons/showPsw.png';
    } else {
        passwordShowing = true;
        document.getElementById('password').innerHTML = 'M20181025';
        document.getElementById('passwordShowState').src = 'media/icons/hidePsw.png';
    }
}