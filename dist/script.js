const start = document.querySelector('#start');
const darkMode = document.querySelector('.darkmode');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

start.addEventListener('click', () => {
    try {
        chrome.tabs.query({ active:true, currentWindow:true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'removeDistractions' }); 
        });
    } catch (error) {
        console.log(error);
        alert('Please refresh the page and try again or go to correct page');        
    }
});

let isDark = true;

darkMode.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    console.log('Dark mode toggled');
});




