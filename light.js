const toggleDarkMode = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");

let darkmode = localStorage.getItem("darkMode");

// Set Dark Mode

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    toggleText.textContent = "Light";
    localStorage.setItem("darkmode", "enabled");
}

//Disable Dark Mode

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    toggleText.textContent = "Dark";
    localStorage.setItem("darkmode", null);
}

//Save Dark Mode History

if (darkmode === "enabled") {
    enableDarkMode();
}

//add Event Listener

toggleDarkMode.addEventListener("click", () => {
    let darkMode = localStorage.getItem("darkmode");

    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})
console.log("Hello")