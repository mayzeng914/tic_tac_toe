var tttapp = angular.module('tttapp', ["firebase"]);

tttapp.controller('tttController', function($scope, $timeout, $firebase) {

var firebaseRef = new Firebase("https://shining-fire-3332.firebaseio.com/");

 $scope.remoteBoxesContainer = 
     $firebase(new Firebase("https://shining-fire-3332.firebaseio.com" + '/remoteBoxesContainer')) ;

//game starts
var howManyClicks = 0;

//define turns
var turnStatus = '';

//initial status
$scope.player1Status = "player 1";
$scope.player2Status = "player 2";
var player_name_1 = '';
var player_name_2 = '';
$scope.tie_count = "Tie";

//game is ready
var player1Win = 0;
var player2Win = 0;
var howManyTies = 0;
var player1WinCount = 0;
var player2WinCount = 0; 

//created the board
$scope.boxes = [{
        clicked: false
    }, {
        clicked: false
    }, { 
        clicked: false
    }, {
        clicked: false
    }, { 
        clicked: false
    }, {
        clicked: false
    }, {
        clicked: false
    }, {
        clicked: false
    }, {
        clicked: false
    }];

// //define turns
// var turnStatus = '';

//define player 1's turn
function turning1(){
    turnStatus = $scope.boxesContainer.player1 + "'s turn";
    $scope.boxesContainer.turning = turnStatus;
    turncolor.colorpink = true;
    turncolor.colorblue = false;
    console.log($scope.boxesContainer.player1 + "'s turn"); 
};

//define player 2's turn
function turning2(){
    turnStatus = $scope.boxesContainer.player2 + "'s turn";
    $scope.boxesContainer.turning = turnStatus;
    turncolor.colorpink = false;
    turncolor.colorblue = true;
    console.log($scope.boxesContainer.player2 + "'s turn");
};

var turncolor = [];

$scope.boxesContainer = {
     boxList: $scope.boxes,
     clickCounter: howManyClicks,
     player1: player_name_1,
     player2: player_name_2,
     turning: turnStatus,
     player1WinC: player1WinCount,
     player2WinC: player2WinCount  
 };

$scope.remoteBoxesContainer.$bind($scope, "boxesContainer");
// $scope.$watch('boxesContainer', function() {
//     console.log('things changed!');
// });
   
//Beginning prompts
window.onload = function() {
    promptPlayer1();
};

//player 1 check in
function promptPlayer1() { 
        $scope.boxesContainer.player1 = prompt("Player 1, enter your name below\n(no more than 10 characters):");
        if ( ($scope.boxesContainer.player1 == null) || ($scope.boxesContainer.player1.length > 10) || ($scope.boxesContainer.player1.length == 0) ) {
            promptPlayer1();
        }
        else {
            $scope.player1Status = $scope.boxesContainer.player1 + ": " + player1Win;
            promptPlayer2();
        };
};

//player 2 check in
function promptPlayer2() {
        $scope.boxesContainer.player2 = prompt("Player 2, enter your name below\n(no more than 10 characters):");
        if ( ($scope.boxesContainer.player2 == null) || ($scope.boxesContainer.player2.length > 10) || ($scope.boxesContainer.player2.length == 0) ) {
            promptPlayer2();
        }
        else {
            $scope.player2Status = $scope.boxesContainer.player2 + ": " + player2Win;
            $scope.tie_count = "Tie: " + howManyTies;
            turnStatus = $scope.boxesContainer.player1 + " goes first!";
            $scope.boxesContainer.turning = turnStatus;
            turncolor.colorpink = true;
        };
};

$scope.clickIt = function(box) {
    // if our box has been clicked if box.clicked
    // equal true
            // Then do nothing, don't increment, etc
    // if its false,
            // Then our box's clicked property to be true
            // increment how many clicks
            // if odd, set box.odd  = true
            // else box.even = true
    if (box.clicked == false) {
        box.clicked = true;
        $scope.boxesContainer.clickCounter++;
        // howManyClicks => 1

        // odd check
        if ($scope.boxesContainer.clickCounter % 2 == 1) {
            //player 1
            box.odd = true;
            //check player 1's winning status
            //check each row of player 1
            for (var i = 0; i <= 8; i += 3) {
                var boxSelectedOddRow = [];
                for (var z = 0; z <= 2; z++) {
                    if ($scope.boxes[i+z].odd) {
                        console.log(i+z);
                        boxSelectedOddRow.push("win");
                    }
                }
                //check if player 1 win the row
                if (boxSelectedOddRow.length == 3) {
                    $scope.boxesContainer.player1WinC++;
                }
            };
            //check each column of player 1
            for (var i = 0; i <= 2; i++) {
                var boxSelectedOddColumn = [];
                for (var z = 0; z <= 8; z += 3) {
                    if ($scope.boxes[i+z].odd) {
                        boxSelectedOddColumn.push("win");
                    }
                }
                //check if player 1 win the column
                if (boxSelectedOddColumn.length == 3) {
                    $scope.boxesContainer.player1WinC++;
                }
            };
            //check the first digonal
            if ($scope.boxes[0].odd && $scope.boxes[4].odd && $scope.boxes[8].odd ) {
                    $scope.boxesContainer.player1WinC++;
            };
            //check the second digonal
            if ($scope.boxes[2].odd && $scope.boxes[4].odd && $scope.boxes[6].odd ) {
                    $scope.boxesContainer.player1WinC++;
            };
            //change to player 2's turn
            if ( ($scope.boxesContainer.clickCounter < 9) && ($scope.boxesContainer.player1WinC == 0) ) {
                turning2(); 
            };
            //game is tied
            if ( ($scope.boxesContainer.clickCounter == 9) && ($scope.boxesContainer.player1WinC == 0) ) {
                howManyTies++;
                $scope.tie_count = "Tie: " + howManyTies;
                turnStatus = "It's tied!";
                nextRound();
                $scope.boxesCountainer.turning = turnStatus;
                turncolor.colorpink = false;
                urncolor.colorblue = false;
                console.log("pink " + turncolor.colorpink + " and blue " + turncolor.colorblue);
            };
            //check if player 1 win
            if ($scope.boxesContainer.player1WinC > 0) {
                pinkWin();
            };
        }
        else {
            //player 2
            box.even = true;
            //check player 2's winning status
            //check each row of player 2
            for (var i = 0; i <= 8; i += 3) {
                var boxSelectedEvenRow = [];
                for (var z = 0; z <= 2; z++) {
                    if ($scope.boxes[i+z].even) {
                        console.log(i+z);
                        boxSelectedEvenRow.push("win");
                    }
                }
                //check if player 2 win the
                if (boxSelectedEvenRow.length == 3) {
                    blueWin();
                }
            };
            //check each column of player 2
            for (var i = 0; i <= 2; i++) {
                var boxSelectedEvenColumn = [];
                for (var z = 0; z <= 8; z += 3) {
                    if ($scope.boxes[i+z].even) {
                        console.log(i+z);
                        boxSelectedEvenColumn.push("win");
                    }
                }
                //check if player 2 win the column
                if (boxSelectedEvenColumn.length == 3) {
                    $scope.boxesContainer.player1WinC++;
                }
            };
            //check the first digonal
            if ($scope.boxes[0].even && $scope.boxes[4].even && $scope.boxes[8].even ) {
                    console.log(boxes[0], boxes[4], boxes[8]);
                    $scope.boxesContainer.player1WinC++;
            };
            //check the second dogonal
            if ($scope.boxes[2].even && $scope.boxes[4].even && $scope.boxes[6].even ) {
                    console.log(boxes[2], boxes[4], boxes[6]);
                    $scope.boxesContainer.player1WinC++;
            };
            //change to player 1's turn
            if ($scope.boxesContainer.player1WinC == 0) {
                turning1();
            };
            if ($scope.boxesContainer.player1WinC > 0) {
                blueWin();
            };
        };
    };  
};

//when player 1 wins
pinkWin = function () {
    $timeout(function() {
        turnStatus = $scope.boxesContainer.player1 + " (pink) win!";
        $scope.boxesContainer.turning = turnStatus;
        player1Win++;
        $scope.player1Status = $scope.boxesContainer.player1 + ": " + player1Win;
        for ( i = 0; i <= 8; i++ ) {
            if ($scope.boxes[i].clicked == false) {
                $scope.boxes[i].clicked = true;
            };
        };
        nextRound();
        turncolor.colorpink = true;
        turncolor.colorblue = false;
        console.log("pink " + turncolor.colorpink + " and blue " + turncolor.colorblue);

    }, 10); 
};

//when player 2 wins
blueWin = function () {
   $timeout(function() {
        turnStatus = $scope.boxesContainer.player2 + " (blue) win!";
        $scope.boxesContainer.turning = turnStatus;
        player2Win++;
        $scope.player2Status = $scope.boxesContainer.player2 + ": " + player2Win;
        for ( i = 0; i <= 8; i++ ) {
            if ($scope.boxes[i].clicked == false) {
                $scope.boxes[i].clicked = true;
            };
        };
        nextRound();
        turncolor.colorpink = false;
        turncolor.colorblue = true;
        console.log("pink " + turncolor.colorpink + " and blue " + turncolor.colorblue);
    }, 10); 
};

//change players after 15 rounds
function nextRound() {
    $timeout(function() {
        console.log( player1Win + player2Win + howManyTies );
        if ( (player1Win + player2Win + howManyTies) == 3) {
            var askForReplacement = confirm("You have been played for 3 rounds!\nWhy not save some time for the others?");
            if (askForReplacement) {
                window.location.reload();
            }
            else {
                alert("Sorry we have to reset your game!");
                window.location.reload();
            }
        }
    }, 700); 
};

//only reload the board
$scope.clickToReloadBoard = function() {
    if ( ($scope.boxesContainer.player1WinC > 0) || ($scope.boxesContainer.player1WinC > 0) || ($scope.boxesContainer.clickCounter == 9) ) { 
        for ( i = 0; i < 9; i++ ) {
            $scope.boxes[i].odd = false;
            $scope.boxes[i].even = false;
            $scope.boxes[i].clicked = false;
            $scope.boxesContainer.clickCounter = 0;
            $scope.boxesContainer.player1WinC = 0;
            $scope.boxesContainer.player1WinC = 0;
            turncolor.colorpink = true;
            turncolor.colorblue = false;
            turnStatus = $scope.boxesContainer.player1 + " goes first!";
            $scope.boxesContainer.turning = turnStatus;
            console.log("pink " + turncolor.colorpink);
        };
    }
    else {
        alert("You haven't complete this round yet!");
    };
};

//reload the page
$scope.clickToReloadPage = function() {
    if ( ($scope.boxesContainer.player1WinC > 0) || ($scope.boxesContainer.player1WinC > 0) || ($scope.boxesContainer.clickCounter == 9) ) {
        var playWithNew = confirm("Are you sure you wanna leave the game right now?\nYou still have " + ( 3 - player1Win - player2Win - howManyTies ) + " round(s) to go!\nClick \"OK\" to continue the game;\nClick \"Cancel\" to start a new game with someone else.");
        if (!playWithNew) {
            window.location.reload();
        };
    }
    else if ( (player1Win == 0) && (player2Win == 0) && (howManyTies == 0) && ($scope.boxesContainer.clickCounter == 0) ) {
        var playWithNew = confirm("Are you sure you wanna leave the game right now?\nYou don't even start it yet!\nClick \"OK\" to continue the game;\nClick \"Cancel\" to start a new game with someone else.");
        if (!playWithNew) {
            window.location.reload();
        };
    }
    else {
        alert("You haven't complete this round yet!");
    };
};

//firebase

});
