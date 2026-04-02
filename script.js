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
  }
];

function getSongIndex() {
  const now = new Date();
  const start = new Date(Date.UTC(now.getUTCFullYear(), 0, 0));
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

  title.textContent = selected.title;
  note.textContent = selected.note;
  mood.textContent = selected.title;

  const rotation = songs
    .map((song, index) => ({
      ...song,
      featured: index === songIndex
    }))
    .slice(songIndex)
    .concat(
      songs
        .map((song, index) => ({
          ...song,
          featured: index === songIndex
        }))
        .slice(0, songIndex)
    )
    .slice(0, 5);

  queue.innerHTML = "";

  rotation.forEach((song, index) => {
    const item = document.createElement("li");
    item.className = song.featured ? "featured" : "";
    item.textContent = index === 0 ? `${song.title}  •  now playing` : song.title;
    queue.appendChild(item);
  });
}

renderSongOfTheDay();
