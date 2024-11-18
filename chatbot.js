// Function to open the chat popup
function openChat() {
    document.getElementById("chatPopup").style.display = "block";
}

// Function to close the chat popup
function closeChat() {
    document.getElementById("chatPopup").style.display = "none";
}

// Function to handle the chat message submission
function submitChat() {
    let question = document.getElementById("question").value;
    let message = document.getElementById("user-message").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let address = document.getElementById("address").value;

    if (message !== "" && phoneNumber !== "" && address !== "") {
        alert(`შეტყობინება: ${message}\nტელეფონის ნომერი: ${phoneNumber}\nმისამართი: ${address}`);
        closeChat();
    } else {
        alert("გთხოვთ, შეავსოთ ყველა ველი.");
    }
}
