document.getElementById("chatForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    let userInput = document.getElementById("userInput").value;
    
    // Append the user's question to the chatbox
    let chatbox = document.getElementById("chatbox");
    let userMessage = document.createElement("div");
    userMessage.textContent = "You: " + userInput;
    userMessage.style.color = "#000";
    chatbox.appendChild(userMessage);
  
    // Clear the input field
    document.getElementById("userInput").value = "";
  
    // Show confirmation message
    let confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.style.display = "block";
  
    // Hide confirmation message after 3 seconds
    setTimeout(function() {
      confirmationMessage.style.display = "none";
    }, 3000);
  
    // Scroll chatbox to the bottom
    chatbox.scrollTop = chatbox.scrollHeight;
  });
  