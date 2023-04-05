export default function countTotalAttempts(attempts) {
  let totalAttempts = 0;

  Object.entries(attempts).forEach(([value, count]) => {
    totalAttempts += value * count;
  });

  return totalAttempts;
}
