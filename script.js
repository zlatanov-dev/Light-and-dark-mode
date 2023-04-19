const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
const [image1, image2, image3] = document.querySelectorAll('img');
const [mode, icon] = toggleIcon.children;

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Toggle Light or Dark Mode
function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 /50%)' : 'rgb(255 255 255 /50%)';
    textBox.style.backgroundColor = isDark? 'rgb(255 255 255 /50%)': 'rgb(0 0 0 /50%)';
    mode.backgroundColor = isDark ? mode.textContent = 'Light Mode': mode.textContent = 'Dark Mode';
    isDark ? icon.classList.replace('fa-sun', 'fa-moon'):icon.classList.replace('fa-moon', 'fa-sun');
    isDark?imageMode('dark'): imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }

}

// Check Local Storage for Theme 
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if(currentTheme === 'dark') {
            toggleSwitch.checked = true;
            toggleDarkLightMode(true);
        }
} 

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

