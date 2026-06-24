let themeSwitch = document.getElementById("theme");
let switchIcon = document.getElementById("switch");

let darkMode = false;

// HOVER
function enterSwitch() {

    if (!darkMode) {
        themeSwitch.innerHTML = "Change to Dark Mode";
        switchIcon.innerHTML = "🌙";
    } else {
        themeSwitch.innerHTML = "Change to Light Mode";
        switchIcon.innerHTML = "🌞";
    }
}

// MOUSE OUT
function exitSwitch() {

    if (!darkMode) {
        themeSwitch.innerHTML = "It's Light Mode";
        switchIcon.innerHTML = "🌞";
    } else {
        themeSwitch.innerHTML = "It's Dark Mode";
        switchIcon.innerHTML = "🌙";
    }
}

// CLICK
function applySwitch() {

    darkMode = !darkMode;

    let body = document.body;
    let header = document.getElementById("home");
    let nav = document.querySelector("nav");
    let footer = document.querySelector("footer");
    let login = document.getElementById("login");

    let cards = document.querySelectorAll(".card");
    let links = document.querySelectorAll("nav a");

    // ================= DARK MODE =================
    if (darkMode) {

        body.style.backgroundColor = "#121212";
        body.style.color = "white";

        header.style.backgroundColor = "#242526";
        header.style.color = "white";

        nav.style.backgroundColor = "#18191a";

        footer.style.backgroundColor = "#18191a";
        footer.style.color = "white";

        login.style.backgroundColor = "black";

        themeSwitch.innerHTML = "It's Dark Mode";
        switchIcon.innerHTML = "🌙";

        links.forEach(link => {
            link.style.color = "white";
        });

        cards.forEach(card => {
            card.style.backgroundColor = "#1e1e1e";
            card.style.color = "white";
            card.style.boxShadow =
                "0 4px 8px rgba(255,255,255,0.2)";
        });

    }

    // ================= LIGHT MODE =================
    else {

        body.style.backgroundColor = "white";
        body.style.color = "black";

        header.style.backgroundColor = "#44b45e";
        header.style.color = "white";

        nav.style.backgroundColor = "#358e49";

        footer.style.backgroundColor = "#4b4b5e";
        footer.style.color = "white";

        login.style.backgroundColor = "white";

        themeSwitch.innerHTML = "It's Light Mode";
        switchIcon.innerHTML = "🌞";

        links.forEach(link => {
            link.style.color = "black";
        });

        cards.forEach(card => {
            card.style.backgroundColor = "white";
            card.style.color = "black";
            card.style.boxShadow =
                "0 4px 8px rgba(0,0,0,0.2)";
        });
    }
}