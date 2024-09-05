let messageInput = document.getElementById("message-box");
function getMessage() {
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = "";
}