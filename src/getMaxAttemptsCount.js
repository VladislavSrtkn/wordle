export default function getMaxAttemptsCount(attemtptsObj) {
  const attempts = [];

  for (const key in attemtptsObj) {
    attempts.push(attemtptsObj[key]);
  }

  return Math.max(...attempts);
}
