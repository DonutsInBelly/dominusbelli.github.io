var clickCount = 0;

function callUserAPOS() {
  clickCount++;
  document.getElementById('poscount').innerHTML = "Number of times user has been called a POS: " + clickCount;
}
