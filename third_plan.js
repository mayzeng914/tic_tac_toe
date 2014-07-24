var tttapp = angular.module('tttapp', []);

tttapp.controller('tttController', function($scope, $timeout) {

//$scope.remoteBoxes = 
//  $firebase (new Firebase("") + /remoteBoxes);

// $scope.createdBoard 
$scope.boxes = [{
        name: 0, 
        clicked: false
    }, {
        name: 1, 
        clicked: false,
    }, {
        name: 2, 
        clicked: false,
    }, {
        name: 3, 
        clicked: false
    }, {
        name: 4, 
        clicked: false
    }, {
        name: 5, 
        clicked: false
    }, {
        name: 6, 
        clicked: false
    }, {
        name: 7, 
        clicked: false
    }, {
        name: 8, 
        clicked: false
    }];

//$scope.remoteBoxes.$bind($scope, "boxes");
//$scope.$watch('boxes')

var howManyClicks = 0;


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
         alert("Pink win!");
    }, 700); 
};

blueWin = function () {
   $timeout(function() {
         alert("Blue win!");
    }, 700); 
};

//button: wanna play again? (reset the page)
//firebase
//extra: animation of clicking; color choosing and player name choosing; game record (how many recend round? how many times per player win?)



});

