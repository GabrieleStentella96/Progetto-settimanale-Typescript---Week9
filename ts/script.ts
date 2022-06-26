const COSTO = 0.20 

class Smartphone {
    charge: number;
    numCalls: number; 
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;
    interval: number;
    


    constructor(charge: number, numCalls: number, hours: number, minutes: number, seconds: number, interval: number){
       this.charge = charge;
       this.numCalls = numCalls;
       this.hours = hours;
       this.minutes = minutes;
       this.seconds = seconds;
       this.interval = interval;
    }

    
}

class User extends Smartphone {
    
    static charge: number;
    static smartphoneCall: any;
    constructor(charge: number, numCalls: number, hours: number, minutes: number, seconds: number, interval: number) {
        super(charge, numCalls, hours, minutes, seconds, interval)
    }
    public chargeCredit(): void {
        if(this.charge <= COSTO) {
            this.charge = this.charge + 10
        } else if (this.charge > COSTO){
            this.charge = this.charge + 5
        }
        console.log(this.charge)
    } 

    public smartphoneCall(): void {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
            this.charge = this.charge - COSTO;
        } 
        console.log(this.charge)
    } 

    public number404(): number {
        let n404 = this.charge - ((this.minutes + 1) * COSTO) - 1; 
        return n404; 
    } 

    public callNumber() {
        if(this.charge >= COSTO){
           
        }
        console.log(this.numCalls)
    }

    public eraseCalls():void {
        this.numCalls = this.numCalls * 0;
        console.log(this.numCalls)
    }

    public stopCall(): void {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }

}
 

let arrUser: User[] = []

let User1 = new User(0.2, 0, 0, 0, 0, 0);
let User2 = new User(5, 0, 0, 0, 0, 0);
let User3 = new User(10, 0, 0, 0, 0, 0); 
console.log(arrUser)
arrUser.push(User1, User2, User3)


let chargeUser1 = document.getElementById('charge1');
chargeUser1!.addEventListener('click',function (){
    User1.chargeCredit();}
);

let chargeUser2 = document.getElementById('charge2');
chargeUser2!.addEventListener('click',function (){
    User2.chargeCredit();}
);

let chargeUser3 = document.getElementById('charge3');
chargeUser3!.addEventListener('click',function (){
    User3.chargeCredit();}
);

const CRONOS1 = document.getElementById('call1');
const CRONOS2 = document.getElementById('call2');
const CRONOS3 = document.getElementById('call3');

let timerUser1: number;
let timerUser2: number;
let timerUser3: number;
let intervalUser1: number;
let intervalUser2: number;
let intervalUser3: number;
let creditUser1 = document.querySelector('.credit');
let creditUser2 = document.querySelector('.credit');
let creditUser3 = document.querySelector('.credit');
let cancel = document.querySelector('.erase');
let seeCredit = document.querySelector('#credit');

CRONOS1!.addEventListener('click',function(){ 
    if(User1.charge < COSTO){
        alert('Siamo spiacenti, ma il tuo credito è insufficiente. Effettua una ricarica')
    } else {
    timerUser1 = setInterval(function(){User1.smartphoneCall()},1000);
    intervalUser1 = setInterval(showTimer,1000);
    }
})

function showTimer(){
    let tikTok1 = document.getElementById('timer1');
    tikTok1!.innerHTML = + (User1.minutes > 9 ? User1.minutes : '0' + User1.minutes) + ':'
    + (User1.seconds > 9 ? User1.seconds : '0' + User1.seconds);
}
cancel!.addEventListener('click',function(){
    User1.eraseCalls();
})

let stopCall1 = document.getElementById('stop1');
stopCall1!.addEventListener('click', function() {
    clearInterval(timerUser1);
    clearInterval(intervalUser1);
    User1.stopCall(); 

})


function showTimer2(){
    let tikTok2 = document.getElementById('timer2');
    tikTok2!.innerHTML = + (User2.minutes > 9 ? User2.minutes : '0' + User2.minutes) + ':'
    + (User2.seconds > 9 ? User2.seconds : '0' + User2.seconds);
}
cancel!.addEventListener('click',function(){
    User2.eraseCalls();
})

let stopCall2 = document.getElementById('stop2');
stopCall2!.addEventListener('click', function() {
    clearInterval(timerUser2);
    clearInterval(intervalUser2);
    User2.stopCall(); 

})

CRONOS2!.addEventListener('click',function(){ 
    if(User2.charge < COSTO){
        alert('Siamo spiacenti, ma il tuo credito è insufficiente. Effettua una ricarica')
    } else {
    timerUser2 = setInterval(function(){User2.smartphoneCall()},1000);
    intervalUser2 = setInterval(showTimer,1000);
    }
})

function showTimer3(){
    let tikTok3 = document.getElementById('timer3');
    tikTok3!.innerHTML = + (User3.minutes > 9 ? User3.minutes : '0' + User3.minutes) + ':'
    + (User3.seconds > 9 ? User3.seconds : '0' + User3.seconds);
}
cancel!.addEventListener('click',function(){
    User3.eraseCalls();
})

let stopCall3 = document.getElementById('stop3');
stopCall3!.addEventListener('click', function() {
    clearInterval(timerUser3);
    clearInterval(intervalUser3);
    User3.stopCall(); 

})

CRONOS3!.addEventListener('click',function(){ 
    if(User3.charge < COSTO){
        alert('Siamo spiacenti, ma il tuo credito è insufficiente. Effettua una ricarica')
    } else {
    timerUser3 = setInterval(function(){User3.smartphoneCall()},1000);
    intervalUser3 = setInterval(showTimer,1000);
    }
})


