//player info
let diamonds = 0;

//level
let attackLevel = 0;
let attackSpeedLevel = 0;
let criticalDamageLevel = 0;
let criticalChanceLevel = 0;

let monsterAnimation = $("#monster").attr("src");

//attack = 1 diamonds
//attack speed hanya nambahin interval
//critical damage multiply duit 
//critical chance naikin presentase multiply

setInterval(function () {
    Hit();
}, 1000);



function Hit() {
    //console.log("test");
    $("#monster img").attr("src", "../../sources/gif/monster-hit.gif");

    //let reward =
    //diamonds = diamonds + 1;

    setTimeout(function () {
        console.log("Delayed function executed!");
        $("#monster img").attr("src", "../../sources/gif/monster-idle.gif");
    }, 150);
    console.log($("#money").text());
    $("#money").text(diamonds);
}

