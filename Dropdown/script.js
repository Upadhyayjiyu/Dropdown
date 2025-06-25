function toggleDropdown() {
  const content = document.getElementById("dropdownContent");
  content.style.display = content.style.display === "block" ? "none" : "block";
}

// Close dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};

// Login modal
function showLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function submitLogin() {
  alert("Login submitted!");
  closeLogin();
}

// Settings modal
function showSettings() {
  document.getElementById("settingsModal").style.display = "flex";
}

function closeSettings() {
  document.getElementById("settingsModal").style.display = "none";
}

// Logout
function logout() {
  alert("You have been logged out.");
}
