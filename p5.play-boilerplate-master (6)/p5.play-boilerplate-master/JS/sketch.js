var divBingoCard= document.getElementById("divBingoCard")
var txtInput=document.getElementById("txtInput")
var pCardCount=document.getElementById("pCount")
var btnDraw=document.getElementById("btnDraw")
var pDrawBall=document.getElementById("pdrawBall")
let counter=0;
let card;
let ballDraw;
let cardMatrixTotal=[];
let cardMatrix;
let cardLength;
let BingoWinner=false;
function draw() {
  //background(255,255,255);  
if(txtInput===""){
alert("Enter Numbers")
}
else{
  if(isNaN(txtInput.value)){
    alert("Enter Numbers Only")
    txtInput.value=null
  }
  else{
    for(var i=0;i<txtInput.value; i++){
      card=new BingoCard()
      card.generateMatrix()
      divBingoCard.innerHTML+=card.drawCard()
      counter++ 
      cardMatrix=card.matrix
      cardMatrixTotal.push(cardMatrix)

    }
    txtInput.value=null
  }
}
pCardCount.innerHTML=`Number Of Card/s:${counter}`

}

function drawBall(){
  ballDraw=new BallDraw()
  ballDraw.drawBall();
  pDrawBall.innerHTML=ballDraw.ballDrawnLetter+"-"+ ballDraw.ballDrawnNumber
  for(var i=0 ; i< cardMatrixTotal.length; i++){
    for(var j=0; j<cardMatrixTotal[i].length;j++){
      for(var k=0; k < cardMatrixTotal[i][j].length; k++){
    
        console.log(cardMatrixTotal)
        if(cardMatrixTotal[i][j][k]==ballDraw.ballDrawnNumber){
          //alert("got it ")
          document.getElementById(cardMatrixTotal[i][j][k]).style.background="red";
          checkBingoWinner();
        }
      }
    } 

  }

if(BingoWinner===true){
  showWinnerCard()
}
}
function checkBingoWinner(){
  
}
function showWinnerCard(){
var confirmation=confirm("there is a bingo winner!")
if(confirmation!==true){
  clearCards()
}
}
function clearCards(){
  var confirmation=confirm("do you want to clear your cards and reset the cards")
  if(confirmation===true){
    window.location.reload()
  }
}