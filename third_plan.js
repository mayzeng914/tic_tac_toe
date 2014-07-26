var tttapp = angular.module('tttapp', ["firebase"]);

tttapp.controller('tttController', function($scope, $timeout, $firebase, $filter) {

var firebaseRef = new Firebase("https://shining-fire-3332.firebaseio.com/");

$scope.remoteBoxesContainer = 
    $firebase(new Firebase("https://shining-fire-3332.firebaseio.com" + '/remoteBoxesContainer')) ;

// $scope.createdBoard 
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

$scope.boxesContainer = {
    boxList: $scope.boxes
};

$scope.remoteBoxesContainer.$bind($scope, "boxesContainer");
$scope.$watch('boxesContainer', function() {
    console.log('things changed!');
});

//Beginning prompts
window.onload = function() {
    promptPlayer1();
};

//player 1 check in
function promptPlayer1() { 
        var player_name_1 = prompt("Player 1, enter your name below (no more than 10 characters):");
        if ( (player_name_1 == null) || (player_name_1.length > 10) || (player_name_1.length == 0) ) {
            promptPlayer1();
        }
        else {
            $scope.player_1 = player_name_1;
            promptPlayer2();
        };
};

//player 2 check in
function promptPlayer2() {
        var player_name_2 = prompt("Player 2, enter your name below (no more than 10 characters):");
        if ( (player_name_2 == null) || (player_name_2.length > 10) || (player_name_2.length == 0) ) {
            promptPlayer2();
        }
        else {
            $scope.player_2 = player_name_2;
            alert( $scope.player_1 + " (pink) goes first!");
        };
};


var howManyClicks = 0;

var player1Win = 0;
$scope.player1win_count = player1Win;
var player2Win = 0;
$scope.player2win_count = player2Win;

var howManyTies = 0;
$scope.tie_count = howManyTies;

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
		howManyClicks++;
	    // howManyClicks => 1

	    // odd check
	    if (howManyClicks % 2 == 1) {
            box.odd = true; 
            //check each row of the first player
            for (var i = 0; i <= 8; i += 3) {
                var boxSelectedOddRow = [];
                for (var z = 0; z <= 2; z++) {
                    if ($scope.boxes[i+z].odd) {
                        console.log(i+z);
                        boxSelectedOddRow.push("win");
                    }
                }
                //check if the first player win the row
                if (boxSelectedOddRow.length == 3) {
                    pinkWin();
                }
            };
            //check each column of the first player
            for (var i = 0; i <= 2; i++) {
                var boxSelectedOddColumn = [];
                for (var z = 0; z <= 8; z += 3) {
                    if ($scope.boxes[i+z].odd) {
                        boxSelectedOddColumn.push("win");
                    }
                }
                //check if the first player win the column
                if (boxSelectedOddColumn.length == 3) {
                    pinkWin();
                }
            };
            //check the first digonal
            if ($scope.boxes[0].odd && $scope.boxes[4].odd && $scope.boxes[8].odd ) {
                    pinkWin();
            }
            //check the second digonal
            if ($scope.boxes[2].odd && $scope.boxes[4].odd && $scope.boxes[6].odd ) {
                    pinkWin();
            }
            if (howManyClicks == 9) {
                alert("It's tied!");
                howManyTies++;
                $scope.tie_count = howManyTies;
            }
        } 
	    else {
			box.even = true;
            //check each row of the second player
            for (var i = 0; i <= 8; i += 3) {
                var boxSelectedEvenRow = [];
                for (var z = 0; z <= 2; z++) {
                    if ($scope.boxes[i+z].even) {
                        console.log(i+z);
                        boxSelectedEvenRow.push("win");
                    }
                }
                //check if the second player win the
                if (boxSelectedEvenRow.length == 3) {
                    blueWin();
                }
            }
            //check each column of the second player
            for (var i = 0; i <= 2; i++) {
                var boxSelectedEvenColumn = [];
                for (var z = 0; z <= 8; z += 3) {
                    if ($scope.boxes[i+z].even) {
                        console.log(i+z);
                        boxSelectedEvenColumn.push("win");
                    }
                }
                //check if the second player win the column
                if (boxSelectedEvenColumn.length == 3) {
                    blueWin();
                }
            }
            //check the first digonal
            if ($scope.boxes[0].even && $scope.boxes[4].even && $scope.boxes[8].even ) {
                    console.log(boxes[0], boxes[4], boxes[8]);
                    blueWin();
            }
            //check the second dogonal
            if ($scope.boxes[2].even && $scope.boxes[4].even && $scope.boxes[6].even ) {
                    console.log(boxes[2], boxes[4], boxes[6]);
                    blueWin();
            }
	    }
    }	
};

//winning alert (extra: try to print it out under the page! and stop the game; and ask for play again!)
pinkWin = function () {
    $timeout(function() {
         alert( $scope.player_1 + " win!" );
         $scope.clickIt = false;
         player1Win++;
         $scope.player1win_count = player1Win++;
    }, 300); 
};

blueWin = function () {
   $timeout(function() {
         alert( $scope.player_2 + " win!" );
         $scope.clickIt = false;
         player2Win++;
         $scope.player2win_count = player2Win++;
    }, 300); 
};

//purpose: only reload the board!
$scope.clickToReload = function() {
     window.location.reload();
};
//firebase
//extra: animation of clicking; color choosing and player name choosing; game record (how many recend round? how many times per player win?)



});

