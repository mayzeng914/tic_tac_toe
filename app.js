var tttapp = angular.module('tttapp', []);

tttapp.controller('tttController', function($scope) {

// $scope.createdBoard 
var howManyClicks = 0;

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
	    } 
	    else {
			box.even = true;
	    }
	}
	
};

$scope.changeRed = function(box){
	return box.odd;
}

$scope.changeBlue = function(box){
	return box.even;
}




});

