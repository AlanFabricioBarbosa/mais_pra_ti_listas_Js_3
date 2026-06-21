const songs = [
  { title: 'Horizonte', artist: 'Lua Azul', durationSeconds: 215 },
  { title: 'Passos', artist: 'Norte Livre', durationSeconds: 187 },
  { title: 'Mar Aberto', artist: 'Vento Sul', durationSeconds: 243 },
];

function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

for (const song of songs) {
  console.log(`${song.artist} — ${song.title} (${formatDuration(song.durationSeconds)})`);
}

let totalDuration = 0;
songs.forEach((song) => {
  totalDuration += song.durationSeconds;
});

console.log(`Duração total: ${formatDuration(totalDuration)}`);