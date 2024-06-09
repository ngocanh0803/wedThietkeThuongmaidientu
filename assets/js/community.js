document.addEventListener("DOMContentLoaded", function() {
    var messageList = document.getElementById("messageList");
    var senderInput = document.getElementById("senderInput");
    var messageInput = document.getElementById("messageInput");
    var sendMessageBtn = document.getElementById("sendMessageBtn");
  
    sendMessageBtn.addEventListener("click", function() {
      const senderName = senderInput.value.trim();
      const messageText = messageInput.value.trim();
      if (senderName !== "" && messageText !== "") {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<strong>${senderName}:</strong> ${messageText}`;
        messageList.appendChild(messageElement);
        senderInput.value = "";
        messageInput.value = "";
        messageList.scrollTop = messageList.scrollHeight;
      }
    });
  
    messageInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        sendMessageBtn.click();
      }
    });
  });
  