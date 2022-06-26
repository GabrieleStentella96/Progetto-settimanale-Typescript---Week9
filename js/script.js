"use strict";
const COSTO = 0.20;
class Smartphone {
    constructor(charge, numCalls, hours, minutes, seconds, interval) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.charge = charge;
        this.numCalls = numCalls;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.interval = interval;
    }
}
class User extends Smartphone {
    constructor(charge, numCalls, hours, minutes, seconds, interval) {
        super(charge, numCalls, hours, minutes, seconds, interval);
    }
    chargeCredit() {
        if (this.charge <= COSTO) {
            this.charge = this.charge + 10;
        }
        else if (this.charge > COSTO) {
            this.charge = this.charge + 5;
        }
        console.log(this.charge);
    }
    smartphoneCall() {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
            this.charge = this.charge - COSTO;
        }
        console.log(this.charge);
    }
    number404() {
        let n404 = this.charge - ((this.minutes + 1) * COSTO) - 1;
        return n404;
    }
    callNumber() {
        if (this.charge >= COSTO) {
        }
        console.log(this.numCalls);
    }
    eraseCalls() {
        this.numCalls = this.numCalls * 0;
        console.log(this.numCalls);
    }
}
let arrUser = [];
let User1 = new User(0.2, 0, 0, 0, 0, 0);
let User2 = new User(5, 0, 0, 0, 0, 0);
let User3 = new User(10, 0, 0, 0, 0, 0);
console.log(arrUser);
arrUser.push(User1, User2, User3);
let chargeUser1 = document.getElementById('charge1');
chargeUser1.addEventListener('click', function () {
    User1.chargeCredit();
});
let chargeUser2 = document.getElementById('charge2');
chargeUser2.addEventListener('click', function () {
    User2.chargeCredit();
});
let chargeUser3 = document.getElementById('charge3');
chargeUser3.addEventListener('click', function () {
    User3.chargeCredit();
});
const CRONOS = document.querySelector('.call');
let timerUser1;
let timerUser2;
let timerUser3;
let intervalUser1;
let intervalUser2;
let intervalUser3;
let creditUser1 = document.querySelector('.credit');
let creditUser2 = document.querySelector('.credit');
let creditUser3 = document.querySelector('.credit');
let cancel = document.querySelector('.erase');
let seeCredit = document.querySelector('#credit');
CRONOS.addEventListener('click', function () {
    if (User1.charge < COSTO) {
        alert('Siamo spiacenti, ma il tuo credito è insufficiente. Effettua una ricarica');
    }
    else {
        timerUser1 = setInterval(function () { User1.smartphoneCall(); }, 1000);
        intervalUser1 = setInterval(Timer, 1000);
    }
});
function Timer() {
    let tikTok1 = document.getElementById('timer1');
    tikTok1.innerHTML = +(User1.minutes > 9 ? User1.minutes : '0' + User1.minutes) + ':'
        + (User1.seconds > 9 ? User1.seconds : '0' + User1.seconds);
}
cancel.addEventListener('click', function () {
    User1.eraseCalls();
});
