//data validation before further operation
function login() {
    
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    if (username == "" || password == "") {
        document.getElementById('username').placeholder = '未填寫';
        document.getElementById('password').placeholder = '未填寫';
        return false;
    } else {
        return true;
    }
}