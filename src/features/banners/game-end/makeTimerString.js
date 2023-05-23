export default function makeTimerString() {
  return [...arguments].map((time) => time.toString().padStart(2, '0')).join(':');
}
