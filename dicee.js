var dice1=Math.floor(Math.random()*6)+1;
var dice2=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+dice1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+dice2+".png");
 if(dice1===dice2)
 {
   document.querySelector("h1").textContent="Draw!";
 }
 else if(dice1>dice2){
  document.querySelector("h1").textContent="✨ Player1 wins!";
}  else {
  document.querySelector("h1").textContent="Player2 wins! ✨";
}
/*
switch(dice1){
  case 1:document.querySelector(".img1").setAttribute("src","images/dice1.png");
  break;
  case 2:document.querySelector(".img1").setAttribute("src","images/dice2.png");
  break;
  case 3:document.querySelector(".img1").setAttribute("src","images/dice3.png");
  break;
  case 4:document.querySelector(".img1").setAttribute("src","images/dice4.png");
  break;
  case 5:document.querySelector(".img1").setAttribute("src","images/dice5.png");
  break;
  case 6:document.querySelector(".img1").setAttribute("src","images/dice6.png");
  break;
default:document.querySelector(".img1").setAttribute("src","images/dice6.png");
document.querySelector("h1").textContent="Refresh Me";
break;
}
switch(dice2){
  case 1:document.querySelector(".img2").setAttribute("src","images/dice1.png");
  break;
  case 2:document.querySelector(".img2").setAttribute("src","images/dice2.png");
  break;
  case 3:document.querySelector(".img2").setAttribute("src","images/dice3.png");
  break;
  case 4:document.querySelector(".img2").setAttribute("src","images/dice4.png");
  break;
  case 5:document.querySelector(".img2").setAttribute("src","images/dice5.png");
  break;
  case 6:document.querySelector(".img2").setAttribute("src","images/dice6.png");
  break;
  default:document.querySelector(".img2").setAttribute("src","images/dice6.png");
  document.querySelector("h1").textContent="Refresh Me";
  break;
}
*/
