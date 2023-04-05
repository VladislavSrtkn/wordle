export default function getMaxAttemptsCount(attemtpts) {
  return Math.max(...Object.values(attemtpts));
}
