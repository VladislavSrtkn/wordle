export default function countWinRate(gamesWon, gamesPlayed) {
  return Math.round((gamesWon / gamesPlayed) * 100) || 0;
}
