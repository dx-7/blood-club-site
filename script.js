document.addEventListener("DOMContentLoaded", () => {
  // Background music volume control (optional)
  const music = document.getElementById("bg-music");
  if (music) music.volume = 0.5;

  // Souls counter
  const souls = document.getElementById("souls-counter");
  if (souls) {
    const count = Math.floor(11 + Math.random() * 7);
    souls.textContent = `${count} souls wandering the halls...`;
  }

  // Gothic clock
  const clock = document.getElementById("goth-clock");
  if (clock) {
    setInterval(() => {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit"
      });
    }, 1000);
  }

  // Rotating abyss quotes
  const abyss = document.getElementById("abyss-quote");
  const abyssQuotes = [
    "The silence here speaks louder than screams.",
    "We dwell in dusk, never light.",
    "Echoes remember what we try to forget.",
    "This sanctuary breathes with haunted rhythm.",
    "Time bleeds. Memory fades. Only the club remains.",
    "The veil is thinner here.",
    "No salvation. Just understanding.",
    "“No longer blind” – Blood Club, 2023",
    "“A darker shape that waits” – Traitrs",
    "“Static prayers and broken hymns” – Casket Cassette",
    "Even in silence, the walls speak."
  ];
  if (abyss) {
    const quote = abyssQuotes[Math.floor(Math.random() * abyssQuotes.length)];
    abyss.innerHTML = `“${quote}”<span>– The Void</span>`;
  }
});