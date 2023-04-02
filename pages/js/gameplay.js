let diamonds = 0;
let monsterAnimation = $("#monster").attr("src");


function Hit() {
    console.log("test");
    $("#monster img").attr("src", "../../sources/gif/monster-hit.gif");
    setTimeout(function () {
        console.log("Delayed function executed!");
        $("#monster img").attr("src", "../../sources/gif/monster-idle.gif");
    }, 150);
}