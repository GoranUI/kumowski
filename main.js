let currentScreen = 1;
const form = document.getElementById('multi-screen-form');
const screens = document.querySelectorAll('.screen');

function nextScreen() {
  screens[currentScreen - 1].style.display = 'none';
  currentScreen++;
  if (currentScreen <= screens.length) {
    screens[currentScreen - 1].style.display = 'block';
  }
}

function submitForm() {
  // Simulate form submission
  form.submit();
}

// Show the initial screen when the page loads
screens[currentScreen - 1].style.display = 'block';
