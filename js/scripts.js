// const player1Turn = "X"
// var grid = ["1","2","3","4","5","6","7","8","9",]
// var gameOn = false;
//
// $(document).ready(function() {
//   const grid = [
//     [' ', ' ', ' ',],
//     [' ', ' ', ' ',],
//     [' ', ' ', ' ',]
//   ];
//
//
// $(".col").click(function() {
//   $(this).html(player1Turn);
//
//
// function winGameOver(gameArray){
//   const winConditions = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [1,4,7],
//     [1,5,9],
//     [3,5,7],
//     [2,5,8],
//     [3,6,9]
//   ];
// };
//
// });
//
// });

// EARLIER CODE

function playerTurn(turn, id) {
  var spotTaken = $("#" + id).text();
  if (spotTaken === "#") {
    grid[id] = turn;
    $("#" + id).text(turn);
  }
};

function x(space) {
  space = [];
}

function y(space) {
  space=[];
}

function winGameOver(gameArray){
  const winConditions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [1,5,9],
    [3,5,7],
    [2,5,8],
    [3,6,9]
  ];
};

var grid = ["1","2","3","4","5","6","7","8","9",]

var turn = "X"


$(document).ready(function() {
   $(".col").click(function() {
     $(this).html(turn);

  var slot = $(this).attr('id');

  if ( slot === "one" ) {
    alert ("You clicked one");
  } else {
    alert ("THATS NOT ONE!");
  }

  console.log(slot)




});
});
