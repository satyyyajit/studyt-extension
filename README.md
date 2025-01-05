# StudYT - A YouTube Focus Extension

**StudYT** is a Chrome extension designed to help users remove distractions on YouTube and focus on studying or other productive tasks. It automatically hides recommendations, comments, and the sidebar, ensuring a cleaner and distraction-free interface.

---

## Features
- Removes YouTube recommendations (right-side video suggestions).
- Removes comments section.
- Removes the sidebar menu (subscriptions, library, etc.).
- Works seamlessly for the current video and any subsequent videos (handles dynamic navigation).
- Toggle between **Dark Mode** and **Light Mode** for the extension popup.

---

## How It Works
1. **Content Script**: Removes distractions by targeting and hiding specific YouTube elements.
2. **MutationObserver**: Monitors DOM changes for dynamic updates (e.g., navigating to a new video).
3. **URL Change Detection**: Ensures distraction removal when the user navigates within YouTube without reloading the page.

---

## Screenshots

### Before StudYT:
![Before StudYT](./screenshots/before.png)

### After StudYT:
![After StudYT](./screenshots/after.png)

---

## Installation

1. **Clone or download the repository**:
   ```bash
   git clone https://github.com/your-username/StudYT.git
   cd StudYT
Load the extension in Chrome:

Go to chrome://extensions/.
Enable Developer mode (toggle in the top-right corner).
Click Load unpacked and select the folder containing the extension files.
Use the extension:

Pin the StudYT extension from the Chrome toolbar.
Open YouTube and click the "Start" button in the extension popup to activate distraction-free mode.
Usage
Activate Distraction-Free Mode:

Open the StudYT popup and click the Start button.
The extension will hide YouTube recommendations, comments, and the sidebar.
Dark Mode Toggle:

Use the Dark Mode button in the extension popup to toggle between light and dark modes.
Automatic Updates:

The extension monitors YouTube's dynamic updates and removes distractions continuously as you navigate.
File Structure
plaintext
Copy code
StudYT/
├── icons/
│   ├── icon.jpeg          # Extension icon
├── screenshots/
│   ├── before.png         # Screenshot before distraction removal
│   ├── after.png          # Screenshot after distraction removal
├── dist/
│   ├── content.js         # Content script to remove distractions
│   ├── index.html         # Extension popup HTML
│   ├── style.css          # Styles for the popup
│   ├── script.js          # Script for popup interactivity
├── manifest.json          # Chrome extension manifest file
└── README.md              # Documentation
Development
Prerequisites
Chrome Browser/ ANy Browser
Basic knowledge of JavaScript, HTML, and CSS
Steps
Modify the content script (content.js) to add or remove functionality as needed.
Test the extension locally by reloading it in chrome://extensions/.
Limitations
Currently limited to YouTube.
Does not block ads (consider pairing with an ad blocker).
Contributing
Contributions are welcome! If you'd like to improve this extension:

Fork the repository.
Create a feature branch.
Submit a pull request with your changes.
License
This project is licensed under the MIT License.

### Author
Created by Satyyyajit.
Feel free to connect and share feedback!


### Next Steps
- Replace placeholders like `your-username` with your actual GitHub username.
- Add screenshots of **Before** and **After** views of YouTube to the `screenshots/` directory.
- If you have additional features, you can update the file accordingly.

Let me know if you need more help! 🚀
