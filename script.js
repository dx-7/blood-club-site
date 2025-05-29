import { recommendations } from './data.js';
document.addEventListener("DOMContentLoaded", () => {
  // Set background music volume to 100% (change to 0.5 for 50% if needed)
  const music = document.getElementById("bg-music");
  if (music) {
    music.volume = 1;
  }
  const container = document.createElement('section');
  container.className = 'recommendations';

  const horrorTitle = document.createElement('h2');
  horrorTitle.textContent = '🎬 Hidden Horror Gems & Upcoming Chillers';
  container.appendChild(horrorTitle);

  const horrorList = document.createElement('ul');
  horrorList.className = 'horror-list';
  recommendations.horror.forEach(film => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${film.title}</strong> (${film.year}) – ${film.note}`;
    horrorList.appendChild(li);
  });
  container.appendChild(horrorList);

  const musicTitle = document.createElement('h2');
  musicTitle.textContent = '🎧 Goth / Postpunk Picks';
  container.appendChild(musicTitle);

  const musicList = document.createElement('ul');
  musicList.className = 'music-list';
  recommendations.music.forEach(song => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${song.artist}</strong> – “${song.track}” (${song.note})`;
    musicList.appendChild(li);
  });
  container.appendChild(musicList);

  document.querySelector('.content').appendChild(container);
  
  // Expanded list of abyssal, dark, and gothic quotes with artists/characters referenced
  const abyss = document.getElementById("abyss-quote");
  const abyssQuotes = [
    '"The silence here speaks louder than screams." — Halloween (1978)',
    '"We dwell in dusk, never light." — Lil Peep',
    '"No soul can escape the pull of the shadows." — Ghostemane',
    '"In silence, we find our truth." — Traitrs',
    '"Death is not an end, but a return to the abyss." — Sybyr',
    '"The darkest corners of our minds are the most honest." — Bones',
    '"The night has many voices, and they all speak in riddles." — Bladee',
    '"Blood stains the path, but only those who walk in darkness see the truth." — Casket Cassette',
    '"A hollow existence can still echo with the loudest screams." — Soft Kill',
    '"The shadows offer comfort to those who embrace them." — Mareux',
    '"What we call “life” is just the long way to death." — Vestron Vulture',
    '"In the blackened woods, where the wolves howl, we walk." — Lil Peep',
    '"There is no light without shadow." — Wicca Phase Spring Eternal',
    '"We are the forgotten whispers of the night." — Trit95',
    '"Every tear is a wound from the past." — French Police',
    '"The future is a cruel joke, as dark as the present." — Ghostemane',
    '"Nothing is real but the night we’re consumed by." — Bladee',
    '"In the dark, everything makes sense." — Soft Kill',
    '"You are nothing but a ghost waiting for a voice." — Lil Peep',
    '"Dreams are the lies we tell ourselves to keep going." — Sybyr',
    '"We dance in shadows because the light has abandoned us." — Casket Cassette',
    '"The midnight hour is when the spirits speak loudest." — Halloween',
    '"Rest is for the dead, the living keep their hearts beating through darkness." — Bones',
    '"Life is a nightmare we refuse to wake up from." — Vestron Vulture',
    '"The dead never leave us; they haunt our every step." — French Police',
    '"I hear the echoes of those who never truly lived." — Bladee',
    '"Truth is a mask we wear, hiding the monstrosities inside." — Mareux',
    '"No light can save me from the darkness within." — Wicca Phase Spring Eternal',
    '"When the sun sets, we rise from the grave of our fears." — Soft Kill',
    '"Angels fall first, demons rise to take their place." — Halloween (1978)',
    '"The music stops, but the haunting continues." — Ghostemane',
    '"Stars die, and all that’s left is the endless void." — Sybyr',
    '"We are born from the void, and to the void we return." — Lil Peep',
    '"Not even darkness can save you from your own mind." — Trit95',
    '"They told me to follow the light, but I found solace in the dark." — Casket Cassette',
    '"What’s scarier than death? Living without purpose." — Bladee',
    '"Blood is thicker than water, but darkness thicker than blood." — Mareux',
    '"The cold embraces the lost; we all belong." — Vestron Vulture',
    '"Guilt is the dark passenger that never leaves." — Ghostemane',
    '"Only in the grave can we find peace." — Soft Kill',
    '"Suffer in silence, for the darkness will swallow your pain." — Lil Peep',
    '"Who needs light when you live in shadows?" — Bones',
    '"You don’t die when you’re killed. You die when you forget." — French Police',
    '"The veil is thinner here." — Halloween',
    '"What’s real is only what’s left after the world falls apart." — Wicca Phase Spring Eternal',
    '"In the quietest night, you’ll hear the screams of the forgotten." — Sybyr',
    '"To die in darkness is the only way to live free." — Casket Cassette',
    '"You can’t escape what lives inside you." — Trit95',
    '"The voices in my head speak in whispers, like the wind through broken glass." — Soft Kill',
    '"Cold hands grasp at my soul, pulling me into the void." — Ghostemane',
    '"I live in the ashes of my dreams." — Bladee',
    '"The day will come when I won\'t be here, but my shadow will still linger." — Vestron Vulture',
    '"The darkness teaches more than the light ever could." — Sybyr',
    '"The void doesn’t take you, it waits for you." — Halloween',
    '"We’re all lost in the abyss, waiting for the end." — Wicca Phase Spring Eternal',
    '"The shadows aren’t your enemies. They’re your home." — Bones',
    '"I am a stranger to light." — Mareux',
    '"Fear is the only thing that keeps us alive." — Casket Cassette',
    '"We are all haunted by what we’ve done." — Lil Peep',
    '"The light fades, and so does the hope." — Soft Kill',
    '"Pain feeds the soul, but peace is a lie." — Ghostemane',
    '"I never asked for the light. I only wanted the truth." — Bladee',
    '"The void doesn’t take you, it waits for you." — French Police',
    '"Born from nightmares, I walk amongst the living." — Sybyr',
    '"The walls around me whisper your name." — Trit95',
    '"The world is just a void pretending to be real." — Wicca Phase Spring Eternal',
    '"The more you run from the darkness, the closer it gets." — Vestron Vulture',
    '"Once you taste darkness, there’s no going back." — Casket Cassette',
    '"There is no afterlife; there’s only the darkness that comes after the fall." — Lil Peep',
    '"Born in shadows, I remain." — Mareux',
    '"Not even death can escape the darkness inside." — Ghostemane',
    '"Every shadow has its own story." — Soft Kill',
    '"We wear masks, but the darkness sees through them." — Bladee',
    '"Even the light is afraid of the dark." — French Police',
    '"No one is ever truly gone." — Halloween',
    '"Our screams are lost in the dark." — Sybyr',
    '"We are ghosts living among the living." — Wicca Phase Spring Eternal',
    '"Even in silence, the walls scream your name." — Casket Cassette',
    '"In the end, there is only the night." — Vestron Vulture',
    '"I can’t escape the abyss that calls me home." — Soft Kill',
    '"You are a shadow in the night, lost and forgotten." — Lil Peep',
    '"The shadows live on in our minds, forever haunting." — Ghostemane',
    '"Pain feeds the soul, but peace is a lie." — Bladee'
  ];

  if (abyss) {
    const randomQuote = abyssQuotes[Math.floor(Math.random() * abyssQuotes.length)];
    abyss.innerHTML = randomQuote;
  }

  // ✅ Lightbox configuration
  if (typeof lightbox !== "undefined") {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true
    });
  }
});