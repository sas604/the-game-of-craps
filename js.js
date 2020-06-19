// JavaScript Document



var dice1;
var dice2;

var point =0;
var stack =1000;
var bet =10;
var rollOutput = document.getElementById('roll');
//var dice1Output = document.getElementById('dice1');
//var dice2Output = document.getElementById('dice2');
var rollButton = document.getElementById('startButton');
var userFeed = document.getElementById('feed');
var money = document.getElementById('money');
var betAmount = document.getElementById('betAmount');
var spinsIn = document.getElementById('spins');
var spins =0;
var wins = 0;
var loses = 0; 
var total;
var  winPe;
var losesPe;
var rollResults = [];
var cube1 = document.querySelector('.cube1');
var cube2 = document.querySelector('.cube2');
var currentClass1 = '';
var currentClass2 = '';
var totalDisp = document.getElementById('totalGame');
var winDisp = document.getElementById('wins');
var losesDisp = document.getElementById('loses');
var winsPDisp  = document.getElementById('winsp');
var losesPDisp= document.getElementById('losesp');

// Event listener
rollButton.addEventListener('click',onClick);
// Function when user click
function onClick(){
 spins = parseInt(spinsIn.value);// set spins amount 
    if(!point){ // check is point set 
    bet = parseInt(betAmount.value); 
    }
    if(isNaN(bet)){ // check if bet is not a namber 
        alert('Your bet is not a namber!');
    }else if (spins>100){ // check that spinns doesn't e
            alert('Enter spins amount beetwen 1 and 100')
         }else if (bet<= stack && spins<=100){
    rollDice();
    }else{
        userFeed.textContent = "You don't have enough money";
    }
 
   
}


function rollDice(){
   
    do{
        
    dice1 = Math.floor(Math.random()*6)+1;
    dice2 = Math.floor(Math.random()*6)+1;
    var roll = dice1 + dice2;
    rollResults.push(roll);
    animationDice();
    //dice1Output.innerHTML = dice1;
    //dice2Output.innerHTML = dice2;
    // Conditional logic 
    if (!point){
        if (roll=== 7 || roll === 11){
            win();
            }else if ( roll === 2 || roll === 3 || roll === 12){
               lose();
            }else {
                point = roll; 
                pointFeed();
            }
    } else {
        if (roll === point){
            win();
            point = 0;
           
        }else if(roll === 7){
            lose();
            point = 0;
            
        }
    }


}
    while(spins>0);
graph();
spinsIn.value = 0;
}
  



function win(){
    userFeed.textContent = 'You win';
    stack += bet;
    money.textContent = '$' + stack;
    wins ++;
    spins--;
    total ++;
    winDisp.textContent = 'Wins: ' + wins;
    
    
}

function lose(){
    userFeed.textContent = 'You lose';
    stack -= bet;
    money.textContent = '$' + stack;
    loses ++;
    spins--;
    total ++;
    losesDisp.textContent = 'Loses: ' + loses;
} 

function pointFeed() {
    userFeed.textContent ='The point is: ' + point + '.';
}
function graph(){
   
    total= wins + loses;
    var canvas = document.getElementById("myChart");
    var drawing =canvas.getContext("2d");
    var canvas2 = document.getElementById("myChart2");
    var ctx =canvas2.getContext("2d");
    var resultTwo = rollResults.filter(hat => hat  === 2);
    var resultThree = rollResults.filter(four => four === 3);
    var resultFour = rollResults.filter(four => four === 4);  
    var resultFive = rollResults.filter(four => four === 5);
    var resultSix = rollResults.filter(four => four === 6);
    var resultSeven = rollResults.filter(four => four === 7);
    var resultEight = rollResults.filter(four => four === 8);
    var resultNine = rollResults.filter(four => four === 9);
    var resultTen = rollResults.filter(four => four === 10);
    var resultEleven = rollResults.filter(four => four === 11);
    var resultTwelv = rollResults.filter(four => four === 12);
    console.log(resultSeven);
    console.log(rollResults);
    winPe = Math.floor(wins/total*100);
    losesPe = Math.floor(loses/total*100);
    if(losesPe || winPe){
    losesPDisp.textContent= losesPe + '%';
    winsPDisp.textContent = winPe + '%';
    }
        //drawing.rotate(Math.PI);
        
    totalDisp.textContent = 'Games played: ' + total;
        
  
   
    drawing.clearRect(0,0, 400, 400);
    drawing.fillStyle = "rgba(255, 45, 0, 0.5)";
    drawing.fillRect(50, 0, 150, 400*winPe/100)
    drawing.fillStyle = "rgba(0,24,255,0.50)";
    drawing.fillRect(250, 0, 150, 400*losesPe/100);
    ctx.clearRect(0,0, 800, 800);
    ctx.fillStyle = "rgba(255,0,0,0.50)";
    ctx.fillRect(360, 0, 25,(resultTwelv.length/rollResults.length*100)/0.08);
    ctx.fillStyle = "rgba(255,0,90,0.50)";
    ctx.fillRect(325, 0, 25, (resultEleven.length/rollResults.length*100)/0.08);
    ctx.fillStyle = "rgba(255,0,223,0.50)";
    ctx.fillRect(290, 0, 25, (resultTen.length/rollResults.length*100)/0.08);
    ctx.fillStyle = "rgba(255,0,217,0.50)";
    ctx.fillRect(255, 0,25,(resultNine.length/rollResults.length*100)/0.08);
    ctx.fillStyle = "rgba(159,0,255,0.50)";
    ctx.fillRect(220, 0, 25, (resultEight.length/rollResults.length*100)/0.08);
    ctx.fillStyle = "rgba(0,94,255,0.50)";
    ctx.fillRect(185, 0, 25, (resultSeven.length/rollResults.length*100)/0.08);
    ctx.fillStyle = "rgba(0,255,232,0.50)";
    ctx.fillRect(150, 0, 25, (resultSix.length/rollResults.length*100)/0.08);
    ctx.fillStyle = "rgba(59,255,0,0.50)";
    ctx.fillRect(115, 0, 25, (resultFive.length/rollResults.length*100)/0.08);
    ctx.fillStyle = "rgba(59,255,0,0.50)";
    ctx.fillRect(80, 0, 25,(resultFour.length/rollResults.length*100)/0.08);
    ctx.fillStyle = "rgba(243,255,0,0.50)";
    ctx.fillRect(45, 0, 25,(resultThree.length/rollResults.length*100)/0.08);
    ctx.fillStyle = "rgba(255, 45, 0, 0.5)";
    ctx.fillRect(10, 0, 25,(resultTwo.length/rollResults.length*100)/0.08);

    
}

//Cube rotation 
function changeSide() {
    var showClass1 = 'show-' + dice1;
    var showClass2 = 'show-' + dice2;
  if ( currentClass1 && currentClass2) {
    cube1.classList.remove( currentClass1 );
    cube2.classList.remove( currentClass2 );
  }
  cube1.classList.add( showClass1 );
  cube2.classList.add( showClass2 );
  currentClass1 = showClass1;
  currentClass2 = showClass2;
}

function animationDice(){
    var d1Temp,d2Temp
    var num = 3;
    var roll = dice1 + dice2;
    
    var aRoll = setInterval( rollAnimate, 500);
    
    function rollAnimate(){
        
        if(num === 0){
            clearInterval(aRoll);
            changeSide();
            rollOutput.innerHTML = roll; 
            
        }else{
    d1Temp = Math.floor(Math.random()*6)+1;
    d2Temp = Math.floor(Math.random()*6)+1;
    var showClass1 = 'show-' + d1Temp;
    var showClass2 = 'show-' + d2Temp;
        if ( currentClass1 && currentClass2) {
        cube1.classList.remove( currentClass1 );
        cube2.classList.remove( currentClass2 );
        }
          cube1.classList.add( showClass1 );
          cube2.classList.add( showClass2 );
          currentClass1 = showClass1;
          currentClass2 = showClass2;
        num--;
        
    }
}}





