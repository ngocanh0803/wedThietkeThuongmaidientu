document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".login-dnhap");
    button.addEventListener("click", createAccount);
});

function createAccount() {
    const phoneNumberInput = document.querySelector('.input-ten-dang-nhap');
    const phoneNumber = phoneNumberInput.value.trim(); //Lay gia tri va bo khoang trang

    //Form so dien thoai 
    const phoneRegex = /^\d{10,12}$/;

    //Kiem tra so dien thoai
    if (!phoneRegex.test(phoneNumber)) {
        alert("Vui lòng nhập đúng số điện thoại của bạn");
        phoneNumberInput.focus();
        return;
    }

    alert("Tạo tài khoản thành công");
}
