export default function countAverageAttempts(attempts, games) {
  return Math.round(attempts / games) || 0;
}
