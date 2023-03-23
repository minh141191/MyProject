class Account {

    username;
    password;

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

}

let account = new Account("minh", "123");
let accountArr = [account];
console.log(accountArr);

function loginAccount() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    for (let i = 0; i < accountArr.length; i++) {
        if (accountArr[i].getUsername() === username && accountArr[i].getPassword() === password) {
            alert("Dang nhap thanh cong")
            window.location.href = "https://james.codegym.vn/?redirect=0";
            return;
        }
    }
    alert("Dang nhap that bai");
}

function showFormRegister() {
    document.getElementById("formLogin").style.display = 'none';
    document.getElementById("formRegister").style.display = 'block';
}

function register() {
    let newUsername = document.getElementById("newName").value;
    let newPassword = document.getElementById("newPassword").value;
    let account1 = new Account(newUsername, newPassword);
    accountArr.push(account1);
    alert("Dang ky thanh conng");
    console.log("account", accountArr);
    document.getElementById("formLogin").style.display = 'block';
    document.getElementById("formRegister").style.display = 'none';
}

// function checkLogin() {
//     let _username = document.getElementById("username").value;
//     let _password = document.getElementById("password").value;
//     if (loginAccount(_username, _password)) {
//         alert("Dang nhap thanh cong");
//     } else {
//         alert("Dang nhap that bai");
//     }
// }


