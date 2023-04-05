function OpenNewGame(){
    $("#popupStart").css("height","18vh");
    $("#popupStart").css("width","30vw");
}

function CloseNewGame(){
    $("#popupStart").css("height","0");
    $("#popupStart").css("width","0");
}

function OpenCredits(){
    $("#popupCred").css("height","30vw");
    $("#popupCred").css("width","30vw");
}

function CloseCredits(){
    $("#popupCred").css("height","0");
    $("#popupCred").css("width","0");
}

function startBtn(){
    window.location.href = "gameplay.html"
}