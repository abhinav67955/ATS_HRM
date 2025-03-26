
let currentMenuVisible = null;

function toggleMenu(color) {
  const welcomeText = document.getElementById('welcome-text'); 
  hideAllMenus(); 
  rotateCircle(); 
  changeColors(color);
  changeInnerCircleText(color);

  let menuOpened = false;

  
  if (color === "blue") {
    if (currentMenuVisible !== "blue") {
      document.getElementById("blue-menu").style.display = "flex";
      currentMenuVisible = "blue";
      menuOpened = true;
    } else {
      currentMenuVisible = null;
      changeInnerCircleText("default"); 
    }
  } else if (color === "green") {
    if (currentMenuVisible !== "green") {
      document.getElementById("green-menu").style.display = "flex";
      currentMenuVisible = "green";
      menuOpened = true;
    } else {
      currentMenuVisible = null;
      changeInnerCircleText("default");
    }
  } else if (color === "yellow") {
    if (currentMenuVisible !== "yellow") {
      document.getElementById("yellow-menu").style.display = "flex";
      currentMenuVisible = "yellow";
      menuOpened = true;
    } else {
      currentMenuVisible = null;
      changeInnerCircleText("default"); 
    }
  }

 
  if (menuOpened) {
    welcomeText.style.display = 'none'; 
  } else {
    welcomeText.style.display = 'block';
  }
}

function hideAllMenus() {
  document.getElementById("blue-menu").style.display = "none";
  document.getElementById("green-menu").style.display = "none";
  document.getElementById("yellow-menu").style.display = "none";
}

function toggleDropdown() {
  document.getElementById("profile").classList.toggle("active");
}

function rotateCircle() {
  let outerCircle = document.getElementById("outer-circle");
  outerCircle.classList.add("rotated");

  setTimeout(() => {
    outerCircle.classList.remove("rotated");
  }, 600); 
}

function changeColors(color) {
  let outerCircle = document.getElementById("outer-circle");
  
  let blueColor = "#3498db"; 
  let greenColor = "#2ecc71"; 
  let yellowColor = "#F3C623"; 

  if (color === "blue") {
    blueColor = "#22177A"; 
  } else if (color === "green") {
    greenColor = "#1F4529"; 
  } else if (color === "yellow") {
    yellowColor = "#f39c12"; 
  }

  outerCircle.style.background =
    "conic-gradient(" +
    blueColor +
    " 0% 33.33%, " + 
    greenColor +
    " 33.33% 66.66%, " + 
    yellowColor +
    " 66.66% 100%" +
    ")";
}

function changeInnerCircleText(color) {
  const innerCircle = document.querySelector(".inner-circle");

  if (color === "blue") {
    innerCircle.textContent = "EMP";
  } else if (color === "green") {
    innerCircle.textContent = "HR";
  } else if (color === "yellow") {
    innerCircle.textContent = "ADMIN";
  } else {
    innerCircle.textContent = "HRMS"; 
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const profilePicture = localStorage.getItem('profilePicture');

  if (profilePicture) {
      document.getElementById('profile-picture').src = profilePicture; 
  } else {
      document.getElementById('profile-picture').src = 'https://t3.ftcdn.net/jpg/04/60/91/88/360_F_460918802_XVCymFr7MoziFpnInbTDvrlblYhvAOi2.jpg';
  }
});

function updateTime() {
  const timeElement = document.getElementById("current-time");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();

document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username'); 
  if (username) {
    document.getElementById('usernames').textContent = username; 
  } else {
    document.getElementById('usernames').textContent = "Guest";
  }
});


  setTimeout(function() {
            document.querySelector('.container').classList.add('active');
        }, 1000); 

let currentStatus = 'active';
const statusButton = document.getElementById('statusButton');
const dropdownContent = document.getElementById('dropdownContent');
const statusDot = document.getElementById('statusDot');

statusButton.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

dropdownContent.addEventListener('click', (e) => {
    const selectedStatus = e.target.closest('[data-status]');
    if (selectedStatus) {
        const newStatus = selectedStatus.dataset.status;
        if (currentStatus !== newStatus) {
            currentStatus = newStatus;
            statusButton.innerHTML = `<div class="circle ${currentStatus}"></div> ${selectedStatus.textContent}`;
            dropdownContent.style.display = 'none';
            updateStatusDot(currentStatus);
        }
    }
});


function updateStatusDot(status) {
    if (status === 'active') {
        statusDot.classList.remove('away', 'do-not-disturb');
        statusDot.classList.add('active');
    } else if (status === 'away') {
        statusDot.classList.remove('active', 'do-not-disturb');
        statusDot.classList.add('away');
    } else if (status === 'do-not-disturb') {
        statusDot.classList.remove('active', 'away');
        statusDot.classList.add('do-not-disturb');
    }
}

updateStatusDot(currentStatus);  

function togg() {
  var circleContainer = document.querySelector('.circle-container');
  var iframeContainer = document.querySelector(".iframe-container");
  var body = document.body;

  // Toggle visibility of the circle container
  circleContainer.classList.toggle('visible');

  // Check if the screen width is below 400px
  if (window.innerWidth <= 500) {
    // For mobile (400px width or smaller)
    if (circleContainer.classList.contains('visible')) {
      iframeContainer.style.width = 'calc(100% - 90px)';  // Adjust iframe width for mobile when circle container is visible
    } else {
      iframeContainer.style.width = '100%';  // Reset width for mobile when circle container is hidden
    }
  } else {
    // For normal view (greater than 400px width)
    if (circleContainer.classList.contains('visible')) {
      iframeContainer.style.width = 'calc(100% - 210px)';  // Adjust iframe width in normal view
    } else {
      iframeContainer.style.width = '100%';  // Reset width in normal view
    }
  }
}
function toggleFooterVisibility() {
  const footer = document.querySelector('.footer');

  
  if (window.innerWidth <= 480) {
    footer.style.display = 'flex';
  } else {
    footer.style.display = 'none';
  }
}
const languageIcon = document.getElementById("languag");
const languageSelect = document.getElementById("languag-select");

languageIcon.addEventListener("click", function() {
  if (languageSelect.style.display === "none" || languageSelect.style.display === "") {
    languageSelect.style.display = "block";
  } else {
    languageSelect.style.display = "none";
  }
});


// Run the function on page load
window.addEventListener('load', toggleFooterVisibility);

// Run the function every time the window is resized
window.addEventListener('resize', toggleFooterVisibility);
document.getElementById('toggle-icon').addEventListener('click', function() {
  const inputBar = document.getElementById('input-bar');
  const inputField = document.getElementById('input-field');
  
  // Toggle visibility of the input bar
  if (inputBar.style.display === "none" || inputBar.style.display === "") {
    inputBar.style.display = "flex"; // Show input bar
  } else {
    inputBar.style.display = "none"; // Hide input bar
  }
});

// Close button functionality
document.getElementById('toggle-btn').addEventListener('click', function() {
  document.getElementById('input-bar').style.display = 'none'; // Hide input bar when close button is clicked
});


// function togg() {
//   var circleContainer = document.querySelector('.circle-container');
//   var iframeContainer = document.querySelector(".iframe-container");
//   var body = document.body;

 
//   circleContainer.classList.toggle('visible');

//   if (circleContainer.classList.contains('visible')) {
     
//       iframeContainer.style.width = 'calc(100% - 215px)'; 
//   } else {
      
//       iframeContainer.style.width = '100%';  
//   }
// }






// function togg() {
//   var circleContainer = document.querySelector('.circle-container');
//   var menuContainer = document.querySelector('.menu');  // Assuming the menu has the class "menu"
//   var iframeContainer = document.querySelector(".iframe-container");
//   var body = document.body;

//   // Toggle visibility of the circle container and menu container
//   circleContainer.classList.toggle('visible');
//   menuContainer.classList.toggle('visible');

//   // Check if the screen width is below 400px
//   if (window.innerWidth <= 400) {
//     // For mobile (400px width or smaller)
//     if (circleContainer.classList.contains('visible')) {
//       iframeContainer.style.width = '100%';  // Adjust iframe width when circle is open
//     } else if (menuContainer.classList.contains('visible')) {
//       iframeContainer.style.width = 'calc(100%-100px)';  // Adjust iframe width when menu is open
//     } else {
//       iframeContainer.style.width = '100%';  // Reset width when neither are open
//     }
//   } else {
//     // For normal view (greater than 400px width)
//     if (circleContainer.classList.contains('visible')) {
//       iframeContainer.style.width = 'calc(100% - 60px)';  // Adjust iframe width when circle is open
//     } else if (menuContainer.classList.contains('visible')) {
//       iframeContainer.style.width = 'calc(100% - 100px)';  // Adjust iframe width when menu is open
//     } else {
//       iframeContainer.style.width = '100%';  // Reset width when neither are open
//     }
//   }
// }

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const darkModeIcon = document.getElementById('dark-mode-icon');

  // Toggle dark mode class
  body.classList.toggle('dark-mode');

  // Check if dark mode is enabled
  const isDarkMode = body.classList.contains('dark-mode');

  // Save preference to localStorage
  localStorage.setItem('darkMode', isDarkMode);

  // Switch between moon and sun icons
  if (isDarkMode) {
    darkModeIcon.textContent = 'light_mode'; // Sun icon for light mode
  } else {
    darkModeIcon.textContent = 'dark_mode'; // Moon icon for dark mode
  }
}

// Load dark mode preference from localStorage
function loadDarkModePreference() {
  const body = document.body;
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Apply dark mode if enabled
  if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeIcon.textContent = 'light_mode'; // Sun icon for light mode
  } else {
    body.classList.remove('dark-mode');
    darkModeIcon.textContent = 'dark_mode'; // Moon icon for dark mode
  }
}

// Load the preference when the page loads
window.onload = loadDarkModePreference;


window.onload = () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
};// Select all bubble elements
const bubbles = document.querySelectorAll('.bubble');

// Function to move bubbles with a delay
const moveBubbles = (e) => {
  let delay = 0; // Delay for trailing bubbles
  bubbles.forEach((bubble, index) => {
    setTimeout(() => {
      bubble.style.left = `${e.pageX}px`; // Set horizontal position
      bubble.style.top = `${e.pageY}px`; // Set vertical position
    }, delay);
    delay += 50; // Increase delay for each trailing bubble
  });
};

// Initialize bubble positions on page load
const initializeBubbles = () => {
  const initialX = window.innerWidth / 2; // Start at the center of the screen
  const initialY = window.innerHeight / 2; // Start at the center of the screen
  bubbles.forEach((bubble) => {
    bubble.style.left = `${initialX}px`;
    bubble.style.top = `${initialY}px`;
  });
};

// Update bubble positions on mouse move
document.addEventListener('mousemove', moveBubbles);

// Initialize bubbles when the page loads
window.addEventListener('load', initializeBubbles);
