chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'removeDistractions') {
        removeDistractions();
    }
});

let removeDistractions = () => {
    const recommendations = document.querySelector("#secondary");
    const comments = document.querySelector("#sections");
    const sidebar = document.querySelector(".ytd-guide-renderer");

    const fadeOutAndRemove = (element) => {
        if (element) {
            element.classList.add('transition-opacity', 'duration-500', 'opacity-0');
            setTimeout(() => {
                element.remove();
            }, 500);
        }
    };

    fadeOutAndRemove(recommendations);
    fadeOutAndRemove(comments);
    fadeOutAndRemove(sidebar);
};




