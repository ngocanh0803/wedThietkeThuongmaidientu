document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".login-dnhap");
    button.addEventListener("click", login);
});

function login() {
    const usernameInput = document.querySelector('.input-ten-dang-nhap');
    const passwordInput = document.querySelector('.input-mat-khau');
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim(); 

    //Form Ten dang nhap
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

    if (!usernameRegex.test(username)) {
        alert("Please enter a valid username (3 to 16 characters, alphanumeric characters, underscores, or hyphens)");
        usernameInput.focus();
        return;
    }

    //Kiem tra xem password co trong khong
    if (!password) {
        alert("Please enter your password");
        passwordInput.focus();
        return;
    }

    //Thong bao khi Ten dang nhap + mat khau chinh xac
    alert("Logging in with username: " + username + " and password: " + password);
}
