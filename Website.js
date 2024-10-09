let cartCount = 0;
let cartTotal = 0;

// Shopping Cart Functions
function addToCart(price) {
  cartCount++;
  cartTotal += price;
  document.querySelector(".cart button").innerHTML = `Cart (${cartCount})`;
  alert(`Item added to cart. Total: $${cartTotal}`);
}

function openCart() {
  alert(`You have ${cartCount} items in your cart. Total: $${cartTotal}`);
}

// Chatbot Functions
function sendMessage() {
  const inputField = document.getElementById("chat-input");
  const message = inputField.value.trim();
  if (message) {
    displayMessage(message, "user");
    processUserMessage(message);
    inputField.value = "";
  }
}

function displayMessage(message, sender) {
  const chatboxMessages = document.getElementById("chatbox-messages");
  const messageElement = document.createElement("p");
  messageElement.classList.add(sender);
  messageElement.innerText = message;
  chatboxMessages.appendChild(messageElement);
  chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
}

function processUserMessage(message) {
  let response = "";
  
  // Basic chatbot logic
  if (message.toLowerCase().includes("hello")) {
    response = "Hello! How can I assist you today?";
  } else if (message.toLowerCase().includes("recommend")) {
    response = "I recommend the Toy Robot! It's our best-seller.";
  } else if (message.toLowerCase().includes("cart")) {
    response = `You have ${cartCount} items in your cart. Total: $${cartTotal}.`;
  } else if (message.toLowerCase().includes("bye")) {
    response = "Goodbye! Have a great day!";
  } else {
    response = "I'm sorry, I don't understand that. Please ask about toys or your cart!";
  }

  displayMessage(response, "bot");
}

// Handle the Enter key press to send messages
function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}
