export default function getTheme() {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  } else {
    return 'light';
  }
}
