// Get the toggle button and set event listener
const themeToggleButton = document.getElementById('toggleLightTheme');

// Function to toggle theme
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('lightTheme');
});
