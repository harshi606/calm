function flipCard() {
  const card = document.querySelector(".card");
  const message = document.getElementById("message");
  card.classList.toggle("flip");

  // Reveal message after flipping
  setTimeout(() => {
    message.classList.add("visible");
    message.classList.remove("hidden");
  }, 1000);
}

function sendHug(event) {
  event.stopPropagation(); // Stop flip when clicking hug
  const hug = document.querySelector(".hug-animation");
  hug.classList.remove("hidden");
  hug.innerText = "🤗 Sending a warm hug...";
  setTimeout(() => {
    hug.innerText = "🤗 Hug Delivered 💗";
  }, 2000);
}
