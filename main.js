let Wood = 0;
let onclickWood = 1;

function plusWood() {
    Wood = Wood + onclickWood;

    document.getElementById('Wood').innerHTML = 'Wood: ' + Wood;
    if (Wood >= 25) {
        document.getElementById('upgrade1').innerHTML = '<button onclick="upgrade1()">Onclick Wood +1</button>';
    }
    else {
        document.getElementById('upgrade1').innerHTML = '<p>Upgrade 1 Not Enough Wood</p>';
    }
    if (Wood >= 250) {
        document.getElementById('upgrade2').innerHTML = '<button onclick="upgrade2()">Onclick Wood +10</button>';
    }
    else {
        document.getElementById('upgrade2').innerHTML = '<p>Upgrade 2 Not Enough Wood</p>';
    }
    if (Wood >= 2500) {
        document.getElementById('upgrade3').innerHTML = '<button onclick="upgrade3()">Onclick Wood +100</button>';
    }
    else {
        document.getElementById('upgrade3').innerHTML = '<p>Upgrade 3 Not Enough Wood</p>';
    }
}
function upgrade1() {
    onclickWood = onclickWood + 1;
    Wood = Wood - 25;
    document.getElementById('clicker').innerHTML = 'Click +' + onclickWood + ' Wood';
    document.getElementById('Wood').innerHTML = 'Wood: ' + Wood;
    if (Wood < 25) {
        document.getElementById('upgrade1').innerHTML = '<p>Upgrade 1 Not Enough Wood</p>';
    }
}
function upgrade2() {
    onclickWood = onclickWood + 10;
    Wood = Wood - 250;
    document.getElementById('clicker').innerHTML = 'Click +' + onclickWood + ' Wood';
    document.getElementById('Wood').innerHTML = 'Wood: ' + Wood;
    if (Wood < 250) {
        document.getElementById('upgrade2').innerHTML = '<p>Upgrade 2 Not Enough Wood</p>';
    }
}
function upgrade3() {
    onclickWood = onclickWood + 100;
    Wood = Wood - 2500;
    document.getElementById('clicker').innerHTML = 'Click +' + onclickWood + ' Wood';
    document.getElementById('Wood').innerHTML = 'Wood: ' + Wood;
    if (Wood < 2500) {
        document.getElementById('upgrade3').innerHTML = '<p>Upgrade 3 Not Enough Wood</p>';
    }
}