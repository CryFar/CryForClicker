let Wood = 25;
let onclickWood = 0;
let idleWood = 0;

//Clicker Upgrades
let UpgradeCounter1 = 0;
let UpgradeCounter2 = 0;
let UpgradeCounter3 = 0;
let UpgradeCounter4 = 0;
//Idle Upgrades
let IdleUpgradeCounter1 = 0;
let IdleUpgradeCounter2 = 0;
let IdleUpgradeCounter3 = 0;
let IdleUpgradeCounter4 = 0;

function plusWood() {
    Wood = Wood + onclickWood;

    document.getElementById('Wood').innerHTML = '<img src="Images/wood.png" height="50px" alt="wood"> ' + Wood;
}
function Refresh() {
    if (Wood >= 25) {
        document.getElementById('clickUpgrade1').setAttribute('onclick', 'upgrade1()');
    }
    if (Wood >= 50) {
        document.getElementById('idleUpgrade1').setAttribute('onclick', 'idleUpgrade1()');
    }
    if (Wood >= 250) {
        document.getElementById('clickUpgrade2').setAttribute('onclick', 'upgrade2()');
    }
    if (Wood >= 500) {
        document.getElementById('idleUpgrade2').setAttribute('onclick', 'idleUpgrade2()');
    }
    if (Wood >= 2500) {
        document.getElementById('clickUpgrade3').setAttribute('onclick', 'upgrade3()');
    }
    if (Wood >= 5000) {
        document.getElementById('idleUpgrade3').setAttribute('onclick', 'idleUpgrade3()');
    }
    if (Wood >= 25000) {
        document.getElementById('clickUpgrade4').setAttribute('onclick', 'upgrade4()');
    }
    if (Wood >= 50000) {
        document.getElementById('idleUpgrade4').setAttribute('onclick', 'idleUpgrade4()');
    }
    setTimeout(Refresh, 10);
}
Refresh();
function upgrade1() {
    onclickWood = onclickWood + 1;
    Wood = Wood - 25;
    UpgradeCounter1 = UpgradeCounter1 +1;
    document.getElementById('clicker').innerHTML = 'Click +' + onclickWood + ' Wood';
    document.getElementById('Wood').innerHTML = '<img src="Images/wood.png" height="50" alt="wood"> ' + Wood;
    document.getElementById('UpgradeCounter1').innerHTML = 'Upgrade 1: ' + '<b>' + UpgradeCounter1 + '</b>';
    document.getElementById('Tutorial').innerHTML = '';
    if (Wood < 25) {
        document.getElementById('clickUpgrade1').setAttribute('onclick', '');
    }
}
function upgrade2() {
    onclickWood = onclickWood + 10;
    Wood = Wood - 250;
    UpgradeCounter2 = UpgradeCounter2 +1;
    document.getElementById('clicker').innerHTML = 'Click +' + onclickWood + ' Wood';
    document.getElementById('Wood').innerHTML = '<img src="Images/wood.png" height="50" alt="wood"> ' + Wood;
    document.getElementById('UpgradeCounter2').innerHTML = 'Upgrade 2: ' + '<b>' + UpgradeCounter2 + '</b>';
    if (Wood < 250) {
        document.getElementById('clickUpgrade2').setAttribute('onclick', '');
    }
}
function upgrade3() {
    onclickWood = onclickWood + 100;
    Wood = Wood - 2500;
    UpgradeCounter3 = UpgradeCounter3 +1;
    document.getElementById('clicker').innerHTML = 'Click +' + onclickWood + ' Wood';
    document.getElementById('Wood').innerHTML = '<img src="Images/wood.png" height="50" alt="wood"> ' + Wood;
    document.getElementById('UpgradeCounter3').innerHTML = 'Upgrade 3: ' + '<b>' + UpgradeCounter3 + '</b>';
    if (Wood < 2500) {
        document.getElementById('clickUpgrade3').setAttribute('onclick', '');
    }
}
function upgrade4() {
    onclickWood = onclickWood + 1000;
    Wood = Wood - 25000;
    UpgradeCounter4 = UpgradeCounter4 +1;
    document.getElementById('clicker').innerHTML = 'Click +' + onclickWood + ' Wood';
    document.getElementById('Wood').innerHTML = '<img src="Images/wood.png" height="50" alt="wood"> ' + Wood;
    document.getElementById('UpgradeCounter4').innerHTML = 'Upgrade 4: ' + '<b>' + UpgradeCounter4 + '</b>';
    if (Wood < 25000) {
        document.getElementById('clickUpgrade4').setAttribute('onclick', '');
    }
}
//Idle Upgrades
function idleUpgrade1() {

    idleWood = idleWood + 1;
    Wood = Wood - 50;
    IdleUpgradeCounter1 = IdleUpgradeCounter1 +1;

    document.getElementById('Wood').innerHTML = '<img src="Images/wood.png" height="50" alt="wood"> ' + Wood;
    document.getElementById('IdleUpgradeCounter1').innerHTML = 'Upgrade 1: ' + '<b>' + IdleUpgradeCounter1 + '</b>';

    if (Wood < 50) {
        document.getElementById('idleUpgrade1').setAttribute('onclick', '');
    }
}
function idleUpgrade2() {

    idleWood = idleWood + 10;
    Wood = Wood - 500;
    IdleUpgradeCounter2 = IdleUpgradeCounter2 +1;

    document.getElementById('Wood').innerHTML = '<img src="Images/wood.png" height="50" alt="wood"> ' + Wood;
    document.getElementById('IdleUpgradeCounter2').innerHTML = 'Upgrade 2: ' + '<b>' + IdleUpgradeCounter2 + '</b>';

    if (Wood < 500) {
        document.getElementById('idleUpgrade2').setAttribute('onclick', '');
    }
}
function idleUpgrade3() {

    idleWood = idleWood + 100;
    Wood = Wood - 5000;
    IdleUpgradeCounter3 = IdleUpgradeCounter3 +1;

    document.getElementById('Wood').innerHTML = '<img src="Images/wood.png" height="50" alt="wood"> ' + Wood;
    document.getElementById('IdleUpgradeCounter3').innerHTML = 'Upgrade 3: ' + '<b>' + IdleUpgradeCounter3 + '</b>';

    if (Wood < 5000) {
        document.getElementById('idleUpgrade3').setAttribute('onclick', '');
    }
}
function idleUpgrade4() {

    idleWood = idleWood + 1000;
    Wood = Wood - 50000;
    IdleUpgradeCounter4 = IdleUpgradeCounter4 +1;

    document.getElementById('Wood').innerHTML = '<img src="Images/wood.png" height="50" alt="wood"> ' + Wood;
    document.getElementById('IdleUpgradeCounter4').innerHTML = 'Upgrade 4: ' + '<b>' + IdleUpgradeCounter4 + '</b>';

    if (Wood < 50000) {
        document.getElementById('idleUpgrade4').setAttribute('onclick', '');
    }
}
function IdleWoodIncome() {
    Wood = Wood + idleWood;

    document.getElementById('Wood').innerHTML = '<img src="Images/wood.png" height="50" alt="wood"> ' + Wood;

    setTimeout(IdleWoodIncome, 1000);
}
IdleWoodIncome();