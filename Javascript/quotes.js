async function loadQuote() {
  try {
    const response = await fetch("quotes.json");
    const data = await response.json();

    // pick a random message
    const msg = data.messages[Math.floor(Math.random() * data.messages.length)];

    // replace marquee text
    document.getElementById("quote").textContent = msg;
  } catch (err) {
    console.error("Error loading quotes:", err);
    document.getElementById("quote").textContent = "Welcome to the library!";
  }
}

window.addEventListener("DOMContentLoaded", loadQuote);
