function toggleTerminalCursorVisibility() {
    const cursor = document.getElementById("terminal-cursor");
    if (cursor.style.display === "none") {
        cursor.style.display = "inline";
    } else {
        cursor.style.display = "none";
    }
}

function setTimelyGreeting() {
    const element = document.getElementById("terminal-greeting");
    const currentTime = new Date();
    console.log(currentTime);
    const currentHour = currentTime.getHours();
    let greeting;
    // Night: Good Evening!
    greeting = "Good Evening!";
    // Afternoon: Good Afternoon!
    if (currentHour < 18) {
        greeting = "Good Afternoon!";
    }
    // Morning: Good Morning!
    if (currentHour < 12) {
        greeting = "Good Morning!";
    }
    // Late Night: Good Evening!
    if (currentHour < 4) {
        greeting = "Good Evening!";
    }
    console.log(greeting);
    element.textContent = greeting;
}

setInterval(toggleTerminalCursorVisibility, 500);

window.onload = () => {
    setTimelyGreeting();
};