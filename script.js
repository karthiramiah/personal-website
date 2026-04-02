const songs = [
  {
    title: "Tuscan Leather",
    note: "For days that need a big entrance and zero warm-up."
  },
  {
    title: "Headlines",
    note: "Confidence-setting music when the calendar says lock in."
  },
  {
    title: "Energy",
    note: "For obvious reasons."
  },
  {
    title: "Do Not Disturb",
    note: "Sharper, calmer, and better after dark."
  },
  {
    title: "Pound Cake / Paris Morton Music 2",
    note: "When the mood is luxury suite meets sports bar debate."
  },
  {
    title: "Passionfruit",
    note: "Smooth enough for slow mornings, clean enough for repeat plays."
  },
  {
    title: "Started From The Bottom",
    note: "A little victory lap energy never hurts."
  },
  {
    title: "Over",
    note: "For when the day needs momentum immediately."
  },
  {
    title: "The Motion",
    note: "Floating, reflective, and way too easy to run back."
  },
  {
    title: "Draft Day",
    note: "For when you want the beat to sound expensive and unbothered."
  },
  {
    title: "Club Paradise",
    note: "Late-night Drake at his most cinematic."
  },
  {
    title: "9",
    note: "Cold-weather confidence with Toronto stamped all over it."
  },
  {
    title: "Sooner Than Later",
    note: "Softer mood, but still one of those songs that sticks."
  },
  {
    title: "Peak",
    note: "Quietly messy in the best Drake way."
  },
  {
    title: "Parade on Cleveland",
    note: "Underrated flex music with a little extra bounce."
  },
  {
    title: "Diamonds Dancing",
    note: "Half luxury, half irritation, fully elite."
  },
  {
    title: "Fear",
    note: "For introspective days when early Drake hits harder."
  },
  {
    title: "The Ride",
    note: "For when the mood is reflective but still heavy."
  },
  {
    title: "The Resistance",
    note: "Patient, underrated, and better every time you revisit it."
  },
  {
    title: "Dreams Money Can Buy",
    note: "Feels like driving around with something to prove."
  },
  {
    title: "Jaded",
    note: "For when the day leans more late-night than productive."
  },
  {
    title: "From Time",
    note: "Reflective enough to slow everything down in a good way."
  },
  {
    title: "Furthest Thing",
    note: "Two moods in one song, both worth keeping."
  },
  {
    title: "Cameras / Good Ones Go Interlude",
    note: "For when the playlist needs something smooth and slightly dramatic."
  },
  {
    title: "Look What You've Done",
    note: "Personal, grateful, and still one of his best storytelling tracks."
  },
  {
    title: "Too Much",
    note: "Heavy thoughts, sharp writing, no wasted space."
  },
  {
    title: "Marvins Room",
    note: "Self-explanatory."
  },
  {
    title: "Shot For Me",
    note: "Petty, melodic, and impossible to ignore."
  },
  {
    title: "Wu-Tang Forever",
    note: "For slower days when you still want something rich."
  },
  {
    title: "Connect",
    note: "Low-key and clean, especially on repeat."
  },
  {
    title: "Chicago Freestyle",
    note: "Relaxed, quotable, and always lands."
  },
  {
    title: "Pipe Down",
    note: "Calm surface, messy underneath."
  },
  {
    title: "Lose You",
    note: "For when Drake sounds most aware of everything around him."
  },
  {
    title: "Sandra’s Rose",
    note: "Smooth, focused, and way better than people give it credit for."
  },
  {
    title: "Lose Yourself",
    note: "Reserved slot if you want to swap in another playlist cut later."
  },
  {
    title: "Signs",
    note: "Clean, lowkey flex — feels like summer even when it’s not."
  },
  {
    title: "U With Me?",
    note: "For when you're overthinking but still running it back anyway."
  }
];

function getSongIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear % songs.length;
}

function renderSongOfTheDay() {
  const songIndex = getSongIndex();
  const selected = songs[songIndex];
  const title = document.getElementById("song-title");
  const note = document.getElementById("song-note");
  const mood = document.getElementById("daily-mood");
  const queue = document.getElementById("song-queue");

  if (!title || !note || !mood || !queue) return;

  title.textContent = selected.title;
  note.textContent = selected.note;
  mood.textContent = selected.title;

  const rotation = [...songs.slice(songIndex), ...songs.slice(0, songIndex)].slice(0, 5);

  queue.innerHTML = "";

  rotation.forEach((song, index) => {
    const item = document.createElement("li");
    item.className = index === 0 ? "featured" : "";
    item.textContent = index === 0 ? `${song.title} • now playing` : song.title;
    queue.appendChild(item);
  });
}

renderSongOfTheDay();