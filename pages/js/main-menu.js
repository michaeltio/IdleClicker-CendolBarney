const isLandscape = window.matchMedia("(orientation: landscape)").matches;

function OpenNewGame() {
    if (isLandscape) {
        $("#popupStart").css("height", "18vh");
        $("#popupStart").css("width", "30vw");
    } else {
        $("#popupStart").css("height", "50vw");
        $("#popupStart").css("width", "100vw");
    }
}

function CloseNewGame() {
    $("#popupStart").css("height", "0");
    $("#popupStart").css("width", "0");
}

function OpenCredits() {
    if (isLandscape) {
        $("#popupCred").css("height", "25vh");
        $("#popupCred").css("width", "50vw");
    } else {
        $("#popupCred").css("height", "50vh");
        $("#popupCred").css("width", "100vw");
    }
}

function CloseCredits() {
    $("#popupCred").css("height", "0");
    $("#popupCred").css("width", "0");
}

function startBtn() {
    window.location.href = "gameplay.html"
}