const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function botReply(userText) {
  const text = userText.toLowerCase();

  if (text.includes("weight loss")) {
    return "For weight loss: eat fewer calories, focus on protein, and stay active.";
  }
  if (text.includes("diet")) {
    return "A healthy diet includes protein, complex carbs, healthy fats, and vegetables.";
  }
  if (text.includes("workout")) {
    return "Try strength training 3–4 days a week and light cardio.";
  }
  if (text.includes("abs")) {
    return "Abs are built with core workouts and low body fat. Planks and leg raises help.";
  }

  return "Drink water, sleep well, and stay consistent. Fitness is a lifestyle!";
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    addMessage(botReply(text), "bot");
  }, 500);
}

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
