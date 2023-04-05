//audio
window.onload = function () {
    let music = new Audio("/sources/audio/background-music.mp3");
    music.play();

}
let punch1 = new Audio("/sources/audio/punch1.mp3");
let punch2 = new Audio("/sources/audio/punch2.mp3");
let punch3 = new Audio("/sources/audio/punch3.mp3");

let upgradeSkill = new Audio("/sources/audio/beli-skill.mp3");


//player info
let diamonds = 0;

//diamons per second
let reward;

//level
let attackLevel = 0;
let attackSpeedLevel = 0;
let criticalDamageLevel = 0;
let criticalChanceLevel = 0;

//price
let attackPrice = 10;
let ASPrice = 10;
let CDPrice = 10;
let CCPrice = 10;


//Max Level for attack,attack speed, critical damage
const MAX_LEVEL = 200;

//max level for critical chance
const MAX_CC = 100;
//attack = 1 diamonds
//attack speed hanya nambahin interval
//critical damage multiply duit 
//critical chance naikin presentase multiply
let interval = 5000;

//
let criticalChance = 0;

//update interval per detik waktu naikin attack speed
function updateInterval() {
    interval = 5000 - (attackSpeedLevel * 10);

    // clear the existing interval
    clearInterval(intervalID);

    // set a new interval with the updated interval time
    intervalID = setInterval(function () {
        console.log("Hello From Clone");
        if (attackSpeedLevel != 0) {
            Hit();
        }
    }, interval);
}

//auto clicker
let intervalID = setInterval(function () {
    console.log("Hello From Original");
    if (attackSpeedLevel != 0) {
        Hit();
    }
}, interval);
setInterval(updateInterval, 5100);


//TERAKHIR NGE LAYOUT

function Hit() {
    //tambahin suara nonjok
    const randomNum = Math.floor(Math.random() * 3) + 1;
    console.log("random: " + randomNum);
    switch (randomNum) {
        case 1:
            punch1.cloneNode(true).play();
            break;
        case 2:
            punch2.cloneNode(true).play();
            break;
        case 3:
            punch3.cloneNode(true).play();
            break;

    }

    //buat ganti animasi monster kalo ke click / touch berarti ke hit
    $("#monster img").attr("src", "../../sources/gif/monster-hitv2.gif");

    //generate number if number from 1 - attack speed level than crit damage proc
    criticalChance = Math.floor(Math.random() * 101);
    if (criticalChance <= criticalChanceLevel) {
        reward = (1 + attackLevel) * (criticalDamageLevel + 1);
    }
    else {
        reward = 1 + attackLevel;
    }

    //nambahin uang 
    diamonds = diamonds + reward;

    //balikin monster ke animasi awal
    setTimeout(function () {
        $("#monster img").attr("src", "../../sources/gif/monster-idlev2.gif");
    }, 250);

    //update uang
    $("#money").text(diamonds);
}

function UpgradeAttack() {
    //check if max level
    if (attackLevel >= MAX_LEVEL) {
        return;
    }

    //check apakah user punya duit atau tidak
    if (diamonds < attackPrice) {
        console.log("No Money");
        return
    }

    //ngurangin duit user
    diamonds = diamonds - attackPrice;
    $("#money").text(diamonds);
    upgradeSkill.cloneNode(true).play();
    //naikin level waktu upgrade
    attackLevel++;

    //buat level text agar update sesuai dengan level
    $("#AttackText").text(`Level: ${attackLevel}`);

    //kalo level max update isi button
    if (attackLevel >= MAX_LEVEL) {
        $("#AttackButton").text("MAX LEVEL");
    }
    //update price
    attackPrice = Math.round(attackPrice * 1.5);
    $("#AttackButton").text(attackPrice);
}

function UpgradeAS() {
    //check if max level
    if (attackSpeedLevel >= MAX_LEVEL) {
        return;
    }

    //check apakah user punya duit atau tidak
    if (diamonds < ASPrice) {
        console.log("No Money");
        return
    }

    //ngurangin duit user
    diamonds = diamonds - ASPrice;
    $("#money").text(diamonds);
    upgradeSkill.cloneNode(true).play();
    //naikin level waktu upgrade
    attackSpeedLevel++;
    //buat level text agar update sesuai dengan level
    $("#ASText").text(`Level: ${attackSpeedLevel}`);
    //kalo level max update isi button
    if (attackSpeedLevel >= MAX_LEVEL) {
        $("#ASButton").text("MAX LEVEL");
    }

    //update price
    ASPrice = Math.round(ASPrice * 1.3);
    $("#ASButton").text(ASPrice);
}

function UpgradeCD() {
    //check if max level
    if (criticalDamageLevel >= MAX_LEVEL) {
        return;
    }
    //check apakah user punya duit atau tidak
    if (diamonds < CDPrice) {
        console.log("No Money");
        return
    }

    //ngurangin duit user
    diamonds = diamonds - CDPrice;
    $("#money").text(diamonds);
    upgradeSkill.cloneNode(true).play();
    //naikin level waktu upgrade
    criticalDamageLevel++;
    //buat level text agar update sesuai dengan level
    $("#CDText").text(`Level: ${criticalDamageLevel}`);
    //kalo level max update isi button
    if (criticalDamageLevel >= MAX_LEVEL) {
        $("#CDButton").text("MAX LEVEL");
    }

    //update price
    CDPrice = Math.round(CDPrice * 2);
    $("#CDButton").text(CDPrice);
}

function UpgradeCC() {
    //check if max level
    if (criticalChanceLevel >= MAX_CC) {
        return;
    }
    //check apakah user punya duit atau tidak
    if (diamonds < CCPrice) {
        console.log("No Money");
        return
    }

    //ngurangin duit user
    diamonds = diamonds - CCPrice;
    $("#money").text(diamonds);
    upgradeSkill.cloneNode(true).play();
    //naikin level waktu upgrade
    criticalChanceLevel++;
    //buat level text agar update sesuai dengan level
    $("#CCText").text(`Level: ${criticalChanceLevel}`);
    //kalo level max update isi button
    if (criticalChanceLevel >= MAX_LEVEL) {
        $("#CCButton").text("MAX LEVEL");
    }

    //update price
    CCPrice = Math.round(CCPrice * 1.3);
    $("#CCButton").text(CCPrice);
}
