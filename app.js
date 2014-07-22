var tttapp = angular.module('tttapp', []);

tttapp.controller('tttController', function($scope) {

// $scope.createdBoard 

$scope.boxes = [{
        name: [1, 1],
        clicked: false
    }, {
        name: [1, 2],
        clicked: false
    }, {
        name: [1, 3],
        clicked: false
    }, {
        name: [2, 1],
        clicked: false
    }, {
        name: [2, 2],
        clicked: false
    }, {
        name: [2, 3],
        clicked: false
    }, {
        name: [3, 1],
        clicked: false
    }, {
        name: [3, 2],
        clicked: false
    }, {
        name: [3, 3],
        clicked: false
    }];

var howManyClicks = 0;

var boxSelectedOdd = [];
var boxSelectedEven = [];

//set up an array = winning combination


$scope.clickIt = function(box) {
	// var box = {name : 1}

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
			boxSelectedOdd.push(box.name);
			//boxSelectedOdd.sort();
			console.log(boxSelectedOdd);
            if (boxSelectedOdd.length == 3) {
                if (boxSelectedOdd[0][0] == boxSelectedOdd[1][0] && boxSelectedOdd[1][0] == boxSelectedOdd[2][0]) {
                    console.log(boxSelectedOdd[0][0], boxSelectedOdd[1][0], boxSelectedOdd[2][0]);
                    redWin();
                    // row win situation
                }
                else if (boxSelectedOdd[0][1] == boxSelectedOdd[1][1] && boxSelectedOdd[1][1] == boxSelectedOdd[2][1]) {
                    console.log(boxSelectedOdd[0][1], boxSelectedOdd[1][1], boxSelectedOdd[2][1]);
                    redWin();
                    // column win situation
                }
                else if ( (boxSelectedOdd[0][0] == boxSelectedOdd[0][1]) && (boxSelectedOdd[1][0] == boxSelectedOdd[1][1]) && (boxSelectedOdd[2][0] == boxSelectedOdd[2][1]) ) {
                    console.log(boxSelectedOdd);
                    redWin();
                    // diagonal left win situation
                }
                else if ( (boxSelectedOdd[0][0] + boxSelectedOdd[0][1]) == 4 && (boxSelectedOdd[1][0] + boxSelectedOdd[1][1]) == 4 && (boxSelectedOdd[2][0] + boxSelectedOdd[2][1]) == 4 ) {
                    console.log(boxSelectedOdd[0][0] + boxSelectedOdd[0][1], boxSelectedOdd[1][0] + boxSelectedOdd[1][1], boxSelectedOdd[2][0] + boxSelectedOdd[2][1], 4 );
                    redWin();
                    // diagonal right win situation
                }
            };
	    } 
	    else {
			box.even = true;
			boxSelectedEven.push(box.name);
			//boxSelectedEven.sort();
			console.log(boxSelectedEven);
            if (boxSelectedEven.length == 3) {
                if (boxSelectedEven[0][0] == boxSelectedEven[1][0] && boxSelectedEven[1][0] == boxSelectedEven[2][0]) {
                    blueWin();
                    // row win situation
                }
                else if (boxSelectedEven[0][1] == boxSelectedEven[1][1] && boxSelectedEven[1][1] == boxSelectedEven[2][1]) {
                    blueWin();
                    // column win situation
                }
                else if ( (boxSelectedEven[0][0] == boxSelectedEven[0][1]) && (boxSelectedEven[1][0] == boxSelectedEven[1][1]) && (boxSelectedEven[2][0] == boxSelectedEven[2][1]) ) {
                    blueWin();
                    // diagonal left win situation
                }
                else if ( (boxSelectedEven[0][0] + boxSelectedEven[0][1]) == 4 && (boxSelectedEven[1][0] + boxSelectedEven[1][1]) == 4 && (boxSelectedEven[2][0] + boxSelectedEven[2][1]) == 4 ) {
                    blueWin();
                    // diagonal right win situation
                }
            };
	    }
	}	
};

//for box.odd & box.even, set up a new var array boxSelected pulling those box.name into it, and sort it into numerical order....


//check boxSelectedOdd.index[0] == 1, check if boxSelectedOdd.index[1] == boxSelectedOdd.index[0]+1 && boxSelected.index[2] == boxSelectedOdd.index[1]+1...

//console.log(winning[0][0]);

// check each digit one by one, when detect the correct digit (1, 2, 3, 4, 7), proceed to the second digit check, etc....
// for loop, from index[0] to index[x], x=boxSelectedOdd.length
//$scope.match = function(box) {
//	for (var i = 0; i < boxSelectedOdd.length; i++) {
//	 if (boxSelectedOdd.index == winning.index[?????].index[0]) {
//	 //check the next one see if it match 
//	 console.log(winning[i]);
//	 if (boxSelected.index == winning.index[1].)
//
//	 }
//	};
// see index[0] == every index[0] in 8 arrays in winning array
// if yes, check index [1], then check index[2]
// $scope.match = function(box) {
// if (yes) {return "win"}
// if (no) {do nth}

//when it gets to howManyClicks = 5 and 6, check winning pattern!!! if no.... get to the next click...
//when it gets to ...... = 7, have 4 elements... how to get rid of the unnecessary one??????
//every time dedecting the correct number, push into vew array winning pattern, keep to push into tha partern until it fill up to 3!!!!
//need to sort it in numerical order!!!!!
//e.g. 9, push, 5, push, and then use if...else, check if its equal to 1!!!


//click = 5, check winning parttern, if not, transfer them into i sth....

redWin = function () {
    alert("Red win!");
};

blueWin = function () {
    alert("Blue win!");
};



});

