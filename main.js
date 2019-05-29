let Wood = 25;
let onclickWood = 0;
let idleWood = 0;

//Clicker Upgrades
let UpgradeCounter1 = 0;
let UpgradeCounter2 = 0;
let UpgradeCounter3 = 0;
//Idle Upgrades
let IdleUpgradeCounter1 = 0;
let IdleUpgradeCounter2 = 0;
let IdleUpgradeCounter3 = 0;

function plusWood() {
    Wood = Wood + onclickWood;

    document.getElementById('Wood').innerHTML = 'Wood: ' + Wood;
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
    setTimeout(Refresh, 100);
}
Refresh();
function upgrade1() {
    onclickWood = onclickWood + 1;
    Wood = Wood - 25;
    UpgradeCounter1 = UpgradeCounter1 +1;
    document.getElementById('clicker').innerHTML = 'Click +' + onclickWood + ' Wood';
    document.getElementById('Wood').innerHTML = 'Wood: ' + Wood;
    document.getElementById('UpgradeCounter1').innerHTML = 'Upgrade 1: ' + UpgradeCounter1;
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
    document.getElementById('Wood').innerHTML = 'Wood: ' + Wood;
    document.getElementById('UpgradeCounter3').innerHTML = 'Upgrade 2: ' + UpgradeCounter2;
    if (Wood < 250) {
        document.getElementById('clickUpgrade2').setAttribute('onclick', '');
    }
}
function upgrade3() {
    onclickWood = onclickWood + 100;
    Wood = Wood - 2500;
    UpgradeCounter3 = UpgradeCounter3 +1;
    document.getElementById('clicker').innerHTML = 'Click +' + onclickWood + ' Wood';
    document.getElementById('Wood').innerHTML = 'Wood: ' + Wood;
    document.getElementById('UpgradeCounter3').innerHTML = 'Upgrade 3: ' + UpgradeCounter3;
    if (Wood < 2500) {
        document.getElementById('clickUpgrade3').setAttribute('onclick', '');
    }
}
//Idle Upgrades
function idleUpgrade1() {

    idleWood = idleWood + 1;
    Wood = Wood - 50;
    IdleUpgradeCounter1 = IdleUpgradeCounter1 +1;

    document.getElementById('Wood').innerHTML = 'Wood: ' + Wood;
    document.getElementById('IdleUpgradeCounter1').innerHTML = 'Upgrade 1: ' + IdleUpgradeCounter1;

    if (Wood < 50) {
        document.getElementById('idleUpgrade1').setAttribute('onclick', '');
    }
}
function idleUpgrade2() {

    idleWood = idleWood + 10;
    Wood = Wood - 500;
    IdleUpgradeCounter2 = IdleUpgradeCounter2 +1;

    document.getElementById('Wood').innerHTML = 'Wood: ' + Wood;
    document.getElementById('IdleUpgradeCounter2').innerHTML = 'Upgrade 2: ' + IdleUpgradeCounter2;

    if (Wood < 500) {
        document.getElementById('idleUpgrade2').setAttribute('onclick', '');
    }
}
function idleUpgrade3() {

    idleWood = idleWood + 100;
    Wood = Wood - 5000;
    IdleUpgradeCounter3 = IdleUpgradeCounter3 +1;

    document.getElementById('Wood').innerHTML = 'Wood: ' + Wood;
    document.getElementById('IdleUpgradeCounter3').innerHTML = 'Upgrade 3: ' + IdleUpgradeCounter3;

    if (Wood < 5000) {
        document.getElementById('idleUpgrade3').setAttribute('onclick', '');
    }
}
function IdleWoodIncome() {
    Wood = Wood + idleWood;

    document.getElementById('Wood').innerHTML = 'Wood: ' + Wood;

    setTimeout(IdleWoodIncome, 1000);
}
IdleWoodIncome();