export default function generateRandomInCss() {
  const randomNumber = Math.random() * (1.5 - 0.5) + 0.5; 
  document.documentElement.style.setProperty("--random-scale", randomNumber);
}
