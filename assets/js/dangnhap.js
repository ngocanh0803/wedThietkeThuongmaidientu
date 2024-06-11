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
    const usernameRegex = /^(?:[a-zA-Z0-9]{3,15}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$|(^\+(?:[0-9] ?){6,14}[0-9]$)|((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/;
    ;

    if (!usernameRegex.test(username)) {
        alert("Tên đăng nhập không hợp lệ (3 đến 15 ký tự, chỉ chứa chữ cái và số)");
        usernameInput.focus();
        return;
    }
    

    //Kiem tra xem password co trong khong
    if (!password) {
        alert("Xin vui lòng nhập mật khẩu");
        passwordInput.focus();
        return;
    }

    //Thong bao khi Ten dang nhap + mat khau chinh xac
    alert("Đăng nhập với tên đăng nhập: " + username + " và mật khẩu: " + password);
}
