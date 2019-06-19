"use strict";
var dieCont = document.getElementById('dieContainer'); // GRAB ELEMENTS FROM HTML
var btnNew = document.getElementById('btnNew');
var btnRoll = document.getElementById('btnRoll');
var btnSum = document.getElementById('btnSum');
var diceCorral = [];
var Die = /** @class */ (function () {
    function Die(value) {
        var _this = this;
        this.value = value;
        this.die = document.createElement('div');
        this.die.className = 'die';
        this.roll();
        dieCont.appendChild(this.die);
        this.die.addEventListener('dblclick', function () {
            _this.die.remove();
            var i = diceCorral.indexOf(_this);
            diceCorral.splice(i, 1); // "Above & Beyond" #3
            console.log(diceCorral);
        });
        this.die.addEventListener('click', function () {
            _this.roll(); // "Above & Beyond" #2
        });
    }
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6 + 1);
        this.die.textContent = this.value;
    };
    return Die;
}());
btnNew.addEventListener('click', function () {
    var newDie = new Die();
    diceCorral.push(newDie);
});
btnRoll.addEventListener('click', function () {
    for (var _i = 0, diceCorral_1 = diceCorral; _i < diceCorral_1.length; _i++) {
        var die = diceCorral_1[_i];
        die.roll();
    }
});
btnSum.addEventListener('click', function () {
    var sum = 0;
    for (var _i = 0, diceCorral_2 = diceCorral; _i < diceCorral_2.length; _i++) {
        var die = diceCorral_2[_i];
        sum += die.value;
    }
    alert('The sum of all dice is ' + sum + '.');
});
