function filterGames(query) {
  const input = query.toLowerCase();
  const games = document.querySelectorAll("#container > div");

  games.forEach(game => {
    const title = game.querySelector("h3")?.textContent.toLowerCase() || "";
    const author = game.querySelector("p")?.textContent.toLowerCase() || "";
    const match = title.includes(input) || author.includes(input);

    if (match) {
      game.style.opacity = "1";
      game.style.pointerEvents = "auto";
    } else {
      game.style.opacity = "0";
      game.style.pointerEvents = "none"; // not clickable, but still takes space
    }
  });
}
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
