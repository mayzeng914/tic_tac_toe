var tttapp = angular.module('tttapp', []);

tttapp.controller('tttController', function($scope) {

// $scope.createdBoard 

$scope.boxes = [{
        name: 1,
        clicked: false
    }, {
        name: 2,
        clicked: false
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
    }, {
        name: 9,
        clicked: false
    }];

var howManyClicks = 0;

var boxSelectedOdd = [];
var boxSelectedEven = [];

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
	    if (howManyClicks % 2 == 1){
			box.odd = true;
			boxSelectedOdd.push(box.name);
			boxSelectedOdd.sort();
			console.log(boxSelectedOdd);
	    } 
	    else {
			box.even = true;
			boxSelectedEven.push(box.name);
			boxSelectedEven.sort();
			console.log(boxSelectedEven);

	    }
	}	
};



//for box.odd & box.even, set up a new var array boxSelected pulling those box.name into it, and sort it into numerical order....




//set up an array = winning combination
var winning = [
//[i, i+1, 2i+1]
//[i, i+2, 2i+2]
//[i, i+3, 2i+3]
//[i, i+4, 2i+4]
    [1, 2, 3],    
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(winning[0][0]);

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



});

