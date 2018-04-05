//BUSINESS LOGIC

var player1=new Player("CJ", "X");
var player2=new Player("Justin", "O");
var turnKeeper=1;


var spaces=[];

function setSpaces(){
  for (i=0; i<=8; i++){
    spaces[i]=new Space("No","");
  }
}

//Define Player Object
function Player (name, symbol){
  this.name=name;
  this.symbol= symbol;
}
//Define Space Object
function Space (marked, symbol){
  this.marked=marked;
  this.symbol=symbol;
}

function restart() {
  var spaces=[];
  var player1=new Player("CJ", "X");
  var player2=new Player("Justin", "O");
  var turnKeeper=1;
}
//Define checkWin function
function checkWin(){

  //tie game checker
  var markedSpaces=0;
  spaces.forEach(function(space){
    if (Space.marked==="Yes"){
      markedSpaces++;
    } else{}
  });




  //Win Conditions
  if (spaces[0].symbol==="X"&&spaces[1].symbol==="X"&&spaces[2].symbol==="X"){
    $("#winHeader").append("Player 1 wins");
  }
  else if (spaces[0].symbol==="O"&&spaces[1].symbol==="O"&&spaces[2].symbol==="O"){
    $("#winHeader").append("Player 2 wins");
  }
  else if (spaces[3].symbol==="X"&&spaces[4].symbol==="X"&&spaces[5].symbol==="X"){
    $("#winHeader").append("Player 1 wins");
  }
  else if (spaces[3].symbol==="O"&&spaces[4].symbol==="O"&&spaces[5].symbol==="O"){
    $("#winHeader").append("Player 2 wins");
  }
  else if (spaces[6].symbol==="X"&&spaces[7].symbol==="X"&&spaces[8].symbol==="X"){
    $("#winHeader").append("Player 1 wins");
  }
  else if (spaces[6].symbol==="O"&&spaces[7].symbol==="O"&&spaces[8].symbol==="O"){
    $("#winHeader").append("Player 2 wins");
  }
  else if (spaces[0].symbol==="X"&&spaces[3].symbol==="X"&&spaces[6].symbol==="X"){
    $("#winHeader").append("Player 1 wins");
  }
  else if (spaces[0].symbol==="O"&&spaces[3].symbol==="O"&&spaces[6].symbol==="O"){
    $("#winHeader").append("Player 2 wins");
  }
  else if (spaces[1].symbol==="X"&&spaces[4].symbol==="X"&&spaces[7].symbol==="X"){
    $("#winHeader").append("Player 1 wins");
  }
  else if (spaces[1].symbol==="O"&&spaces[4].symbol==="O"&&spaces[7].symbol==="O"){
    $("#winHeader").append("Player 2 wins");
  }
  else if (spaces[2].symbol==="X"&&spaces[5].symbol==="X"&&spaces[8].symbol==="X"){
    $("#winHeader").append("Player 1 wins");
  }
  else if (spaces[2].symbol==="O"&&spaces[5].symbol==="O"&&spaces[8].symbol==="O"){
    $("#winHeader").append("Player 2 wins");
  }
  else if (spaces[0].symbol==="X"&&spaces[4].symbol==="X"&&spaces[8].symbol==="X"){
    $("#winHeader").append("Player 1 wins");
  }
  else if (spaces[0].symbol==="O"&&spaces[4].symbol==="O"&&spaces[8].symbol==="O"){
    $("#winHeader").append("Player 2 wins");
  }
  else if (spaces[6].symbol==="X"&&spaces[4].symbol==="X"&&spaces[2].symbol==="X"){
    $("#winHeader").append("Player 1 wins");
  }
  else if (spaces[6].symbol==="O"&&spaces[4].symbol==="O"&&spaces[2].symbol==="O"){
    $("#winHeader").append("Player 2 wins");
  } else if (markedSpaces===9){
    $("#winHeader").append("Tie Game!");
  } else{}
}


//USER INTERFACE LOGIC
$(document).ready(function() {
  setSpaces();


  $(".cell").click(function(){
    cellId=$(this).attr("id");
    console.log(cellId);
    if (spaces[cellId].marked==="No"){
      if (turnKeeper%2===0){
        $(this).append(player2.symbol);
        spaces[cellId].marked="Yes";
        spaces[cellId].symbol=player2.symbol;
        turnKeeper++;
        checkWin();
        //console.log(spaces[0].symbol);
      } else {

        $(this).append(player1.symbol);
        turnKeeper++;
        spaces[cellId].marked="Yes";
        spaces[cellId].symbol=player1.symbol;
        checkWin();
      }
    }
    else {}



  });
$(".restart").click(function(){
location.reload();


});

});
