/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  // create an object to accomodate the Board
  var uncheckedSpaces = {};
  // fill unchecked spaces obj with all the available pieces in the board
  // iterate over to navigate rowIndex
  // iterate over to get location of colIndex
  // add as property to the uncheckedSpaces obj
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      uncheckedSpaces[[i, j]] = [i, j];
    }
  }

  // create a storage array for the chess pieces
  // pass into the recursive function, both the pcs array and un/ spaces object
    ////// Recursion () specs:
    // w/in object function, we're going to replicate uncheckedspaces obj & pcs array
    // take a specific coordinate as argument, to determine where to place the piece(rook)
    // return piece placements on a board, if & only if there are n pieces on the board
      // otherwise, if there are no valid placements, we would then backtrack (same as below)
      // backtrack: if there are pieces < n once we've gone through all available placements in both rows and columns
  var pieces = [];

  var fillBoard = function(coordinate, trimmedSpaces, newPieces) {
    var coordinates = Object.keys(trimmedSpaces);
    var newSpaces = Object.assign(trimmedSpaces);

    var xy = coordinate.split(','); // tuple

    var newPieces = Array.from(newPieces);
    newPieces.push(xy);
    if (newPieces.length === n) {
      return newPieces;
    }

    for (var i = 0; i < n; i++) {
      delete newSpaces[`${parseInt(xy[0])},${i}`];
    }

    for (var j = 0; j < n; j++) {
      delete newSpaces[`${j},${parseInt(xy[1])}`];
    }

    // Object.keys(newSpaces).forEach(function(coordinate, newSpaces, newPieces) {
    //   fillBoard(coordinate, newSpaces, newPieces);
    // });
    var smallerBoard = Object.keys(newSpaces);
    var subSolution = 0;
    // for (var i = 0; i < smallerBoard.length; i++) {
    //   subSolution = fillBoard(smallerBoard[i], newSpaces, newPieces);
    // }
    return fillBoard(smallerBoard[0], newSpaces, newPieces);

  };

  var rooks = fillBoard(Object.keys(uncheckedSpaces)[0], uncheckedSpaces, pieces);

  var newSolution = new Array(n);

  for (var i = 0; i < n; i++) {
    var blankRow = new Array(n);
    blankRow.length = n;
    blankRow.fill(0);
    newSolution[i] = blankRow;
  }

  for (var i = 0; i < rooks.length; i++) {
    newSolution[parseInt(rooks[i][0])][parseInt(rooks[i][1])] = 1;
  }

  solution = newSolution;

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  // implement formula for rotating left
  // var coordinate = [x, y]
  var newY = x;
  var newX = (n - 1) - y;
  // formula for rotating right
  var newX = y;
  var newY = (n - 1) - x;

  // generate all possible combinations w/ a magical function

  // delete duplicates using the rotating coordinates
  // return count of all unique combinations

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

//Initial conditions for an n-by-n board
// input - n
// output - array of arrays with tuples with placed queens
// Constraints = input n must be > 0
// Time Complexity <= quadratic
// EC - n === 1 || 2 || 3

///////////////////////////////////////////