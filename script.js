document.addEventListener("DOMContentLoaded", () => {
  // Audio volume
  const music = document.querySelector("audio");
  if (music) music.volume = 0.5;

  // Gothic visitor counter
  const souls = document.getElementById("souls-counter");
  if (souls) {
    const count = Math.floor(11 + Math.random() * 7);
    souls.textContent = `${count} souls wandering the halls...`;
  }

  // Live gothic clock
  const clock = document.getElementById("goth-clock");
  if (clock) {
    const updateTime = () => {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  // Rotating quote from the abyss
  const abyss = document.getElementById("abyss-quote");
  const abyssQuotes = [
    "The silence here speaks louder than screams.",
    "We dwell in dusk, never light.",
    "Echoes remember what we try to forget.",
    "Time bleeds. Memory fades. Only the club remains.",
    "No salvation. Just understanding.",
    "The veil is thinner here.",
    "This sanctuary breathes with haunted rhythm.",
    "“No longer blind” — Blood Club",
    "“A darker shape that waits” — Traitrs",
    "“Static prayers and broken hymns” — Casket Cassette",
    "Even in silence, the walls speak."
  ];
  if (abyss) {
    const quote = abyssQuotes[Math.floor(Math.random() * abyssQuotes.length)];
    abyss.innerHTML = `“${quote}”<span>— The Void</span>`;
  }
});