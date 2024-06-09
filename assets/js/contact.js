document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("myForm").reset();
    alert("Gửi thành công! Cảm ơn bạn đã góp ý");
});