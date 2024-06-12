document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".login-dnhap");
    button.addEventListener("click", createAccount);
});

function createAccount() {
    const userNameInput = document.querySelector('.input-ten-dang-nhap');
    const userName = phoneNumberInput.value.trim(); //Lay gia tri va bo khoang trang

    //Form so dien thoai 
    const usernameRegex = /^(?:[a-zA-Z0-9]{3,15}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$|(^\+(?:[0-9] ?){6,14}[0-9]$)|((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/;;

    //Kiem tra so dien thoai
    if (!usernameRegex.test(userName)) {
        alert("Vui lòng điền tên đăng nhập của bạn");
        phoneNumberInput.focus();
        return;
    }

    alert("Tạo tài khoản thành công");
}
