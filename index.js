const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Set initial theme based on preference or default to light
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = 'Switch to Light Mode';
} else {
    body.classList.add('light');
    toggleButton.textContent = 'Switch to Dark Mode';
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        toggleButton.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark', 'light');
        toggleButton.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});
