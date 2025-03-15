let homeScore = document.getElementById("home-Score")
let guestScore = document.getElementById("guest-Score")

let homeCounter = 0;
let guestCounter = 0;

function addOneHome() {
    homeCounter += 1;
    homeScore.textContent = homeCounter;
}

function addTwoHome() {
    homeCounter += 2;
    homeScore.textContent = homeCounter;
}

function addThreeHome() {
    homeCounter += 3;
    homeScore.textContent = homeCounter;
}

function addOneGuest() {
    guestCounter += 1;
    guestScore.textContent = guestCounter;
}

function addTwoGuest() {
    guestCounter += 2;
    guestScore.textContent = guestCounter;
}

function addThreeGuest() {
    guestCounter += 3;
    guestScore.textContent = guestCounter;
}

function homeReset() {
    homeCounter = 0;
    homeScore.textContent = homeCounter;
}

function guestReset() {
    guestCounter = 0;
    guestScore.textContent = guestCounter;
}