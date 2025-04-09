let home = document.getElementById("home-el")
let guest = document.getElementById("guest-el")

let homeScore = 0
let guestScore = 0

function add1Home() {
    homeScore += 1
    home.innerText = homeScore
}

function add2Home() {
    homeScore += 2
    home.innerText = homeScore
}

function add3Home() {
    homeScore += 3
    home.innerText = homeScore
}

function add1Guest() {
    guestScore += 1
    guest.innerText = guestScore
}

function add2Guest() {
    guestScore += 2
    guest.innerText = guestScore
}

function add3Guest() {
    guestScore += 3
    guest.innerText = guestScore
}