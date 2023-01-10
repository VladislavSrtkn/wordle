export default function countAttempts(statistics) {
  let totalAttempts = 0;

  for (const key in statistics['attempts']) {
    const attempts = key;
    const count = statistics['attempts'][key];

    totalAttempts += attempts * count;
  }

  return totalAttempts;
}
