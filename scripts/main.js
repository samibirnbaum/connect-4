
$("button").click(function (event) {
    clickTrack(event.target);    
    changeTurnInfo();
    placePiece(event.target);
    winCheck();
});


/****GLOBAL VARIABLES****/

var currentPieceColor = "red";
var currentPlacedCell = 0;

var clickCountTotal = 0;
var buttonOneClickCount = 0;
var buttonTwoClickCount = 0;
var buttonThreeClickCount = 0;
var buttonFourClickCount = 0;
var buttonFiveClickCount = 0;
var buttonSixClickCount = 0;

var theBoard = [
    "1blank", "2blank", "3blank", "4blank", "5blank", "6blank",
    "7blank", "8blank", "9blank", "10blank", "11blank", "12blank",
    "13blank", "14blank", "15blank", "16blank", "17blank", "18blank",
    "19blank", "20blank", "21blank", "22blank", "23blank", "24blank",
    "25blank", "26blank", "27blank", "28blank", "29blank", "30blank",
    "31blank", "32blank", "33blank", "34blank", "35blank", "36blank",
];
var inARow = 0;

/*************************/








/****TRACK CLICKS****/
var clickTrack = function (eventTarget) {
    clickCountTotal = clickCountTotal + 1;
    
    switch ($(eventTarget).data("button")) {
        case 1:
            buttonOneClickCount = buttonOneClickCount + 1;
            break;
        case 2:
            buttonTwoClickCount = buttonTwoClickCount + 1;
            break;
        case 3:
            buttonThreeClickCount = buttonThreeClickCount + 1;
            break;
        case 4:
            buttonFourClickCount = buttonFourClickCount + 1;
            break;
        case 5:
            buttonFiveClickCount = buttonFiveClickCount + 1;
            break;
        case 6:
            buttonSixClickCount = buttonSixClickCount + 1;
    };
};
/*********************************/












/****WHOSE TURN INFORMATION****/
var redPiece = '<div class="red-piece"></div>';
var yellowPiece = '<div class="yellow-piece"></div>';

var playerOnesTurn = '<h2 class="text-muted">Player 1 <br> It is your turn</h2>';
var playerTwosTurn = '<h2 class="text-muted">Player 2 <br> It is your turn</h2>';

var changeTurnInfo = function() {
    if (clickCountTotal%2 === 0) {
        $(".turn").empty().append(playerOnesTurn + redPiece);
        currentPieceColor = "yellow";
    }else{
        $(".turn").empty().append(playerTwosTurn + yellowPiece);
        currentPieceColor = "red"
    }
};
/*********************************/










/****PLACING PIECES ON THE BOARD****/

var placePiece = function(eventTarget) {
    if($(eventTarget).data("button") === 1 && buttonOneClickCount === 1){
        currentPlacedCell = 31;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 1 && buttonOneClickCount === 2){
        currentPlacedCell = 25;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 1 && buttonOneClickCount === 3){
        currentPlacedCell = 19;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 1 && buttonOneClickCount === 4){
        currentPlacedCell = 13;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 1 && buttonOneClickCount === 5){
        currentPlacedCell = 7;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 1 && buttonOneClickCount >= 6){
        currentPlacedCell = 1;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
        $("[data-button=1]").prop("disabled","true");
    }

    if($(eventTarget).data("button") === 2 && buttonTwoClickCount === 1){
        currentPlacedCell = 32;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 2 && buttonTwoClickCount === 2){
        currentPlacedCell = 26;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 2 && buttonTwoClickCount === 3){
        currentPlacedCell = 20;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 2 && buttonTwoClickCount === 4){
        currentPlacedCell = 14;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 2 && buttonTwoClickCount === 5){
        currentPlacedCell = 8;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 2 && buttonTwoClickCount >= 6){
        currentPlacedCell = 2;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
        $("[data-button=2]").prop("disabled","true");
    }

    if($(eventTarget).data("button") === 3 && buttonThreeClickCount === 1){
        currentPlacedCell = 33;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 3 && buttonThreeClickCount === 2){
        currentPlacedCell = 27;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 3 && buttonThreeClickCount === 3){
        currentPlacedCell = 21;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 3 && buttonThreeClickCount === 4){
        currentPlacedCell = 15;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 3 && buttonThreeClickCount === 5){
        currentPlacedCell = 9;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 3 && buttonThreeClickCount >= 6){
        currentPlacedCell = 3;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
        $("[data-button=3]").prop("disabled","true");
    }

    if($(eventTarget).data("button") === 4 && buttonFourClickCount === 1){
        currentPlacedCell = 34;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 4 && buttonFourClickCount === 2){
        currentPlacedCell = 28;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 4 && buttonFourClickCount === 3){
        currentPlacedCell = 22;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 4 && buttonFourClickCount === 4){
        currentPlacedCell = 16;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 4 && buttonFourClickCount === 5){
        currentPlacedCell = 10;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 4 && buttonFourClickCount >= 6){
        currentPlacedCell = 4;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
        $("[data-button=4]").prop("disabled","true");
    }

    if($(eventTarget).data("button") === 5 && buttonFiveClickCount === 1){
        currentPlacedCell = 35;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 5 && buttonFiveClickCount === 2){
        currentPlacedCell = 29;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 5 && buttonFiveClickCount === 3){
        currentPlacedCell = 23;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 5 && buttonFiveClickCount === 4){
        currentPlacedCell = 17;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 5 && buttonFiveClickCount === 5){
        currentPlacedCell = 11;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 5 && buttonFiveClickCount >= 6){
        currentPlacedCell = 5;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
        $("[data-button=5]").prop("disabled","true");
    }

    if($(eventTarget).data("button") === 6 && buttonSixClickCount === 1){
        currentPlacedCell = 36;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 6 && buttonSixClickCount === 2){
        currentPlacedCell = 30;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 6 && buttonSixClickCount === 3){
        currentPlacedCell = 24;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 6 && buttonSixClickCount === 4){
        currentPlacedCell = 18;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 6 && buttonSixClickCount === 5){
        currentPlacedCell = 12;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
    }else if($(eventTarget).data("button") === 6 && buttonSixClickCount >= 6){
        currentPlacedCell = 6;
        insertPiece(currentPlacedCell, currentPieceColor);
        updateTheBoard(currentPlacedCell, currentPieceColor);
        $("[data-button=6]").prop("disabled","true");
    }
};

var insertPiece = function(number, color) {
    $("[data-board-cell="+number+"]").css({
        'background-image': 'url("../assets/images/'+color+'.png")',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'contain',
    });
};

var updateTheBoard = function(number, color) {
    theBoard[number-1] = number+color;
};


/*********************************/








/****CHECKING FOR A WIN****/

// A proximity search, which occurs when a piece is placed on the board, in all directions
// To increase speed I have limited searches in directions only when necessary
var winCheck = function(){
    var limitCheckLeft = [4, 5, 6, 10, 11, 12, 16, 17, 18, 22, 23, 24, 28, 29, 30, 34, 35, 36];
    var limitCheckRight = [1, 2, 3, 7, 8, 9, 13, 14, 15, 19, 20, 21, 25, 26, 27, 31, 32, 33];
    var limitCheckDown = [1, 2,	3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    var limitCheckRDU = [19, 20, 21, 25, 26, 27, 31, 32, 33];
    var limitCheckRDD = [1,2,3,7,8,9,13,14,15];
    var limitCheckLDU = [22,23,24,28,29,30,34,35,36];
    var limitCheckLDD = [4,5,6,10,11,12,16,17,18];

    if (limitCheckLeft.includes(currentPlacedCell)) {leftCheck();}
    
    if (limitCheckRight.includes(currentPlacedCell)) {rightCheck();}
    
    if (limitCheckDown.includes(currentPlacedCell)) {downCheck();}
    
    if (limitCheckRDU.includes(currentPlacedCell)) {rightDiagonalUpCheck();}
    
    if (limitCheckRDD.includes(currentPlacedCell)) {rightDiagonalDownCheck();}

    if (limitCheckLDU.includes(currentPlacedCell)) {leftDiagonalUpCheck();}

    if (limitCheckLDD.includes(currentPlacedCell)) {leftDiagonalDownCheck();}   
};


var rightCheck = function () {
    //based on the current placed cell in the view check through theBoard array
    var cellToTheRightInArray = currentPlacedCell; 
    for(var i=0; i<3; i++){    
        if(theBoard[cellToTheRightInArray] === (cellToTheRightInArray+1)+currentPieceColor){
            inARow = inARow + 1;  
        }else{
            inARow = 0;
            break;
        }
        //after checking one cell in theBoard array in that direction move to the next cell
        cellToTheRightInArray = cellToTheRightInArray + 1;
    }
    if(inARow === 3){winAndReset();}
};


var leftCheck = function () {
    //based on the current placed cell in the view check through theBoard array
    var cellToTheLeftInArray = currentPlacedCell-2; 
    for(var i=0; i<3; i++){    
        if(theBoard[cellToTheLeftInArray] === (cellToTheLeftInArray+1)+currentPieceColor){
            inARow = inARow + 1;  
        }else{
            inARow = 0;
            break;
        }
          
        //after checking one cell in theBoard array in that direction move to the next cell
        cellToTheLeftInArray = cellToTheLeftInArray - 1;
    }
    if(inARow === 3){winAndReset();}
};

var downCheck = function () {
    //based on the current placed cell in the view check through theBoard array
    var cellDownInArray = currentPlacedCell+5; 
    for(var i=0; i<3; i++){    
        if(theBoard[cellDownInArray] === (cellDownInArray+1)+currentPieceColor){
            inARow = inARow + 1;  
        }else{
            inARow = 0;
            break;
        }
          
        //after checking one cell in theBoard array in that direction move to the next cell
        cellDownInArray = cellDownInArray + 6;
    }
    if(inARow === 3){winAndReset();}        
};

var rightDiagonalUpCheck = function () {
    //based on the current placed cell in the view check through theBoard array
    var cellRDUInArray = currentPlacedCell-6; 
    for(var i=0; i<3; i++){    
        if(theBoard[cellRDUInArray] === (cellRDUInArray+1)+currentPieceColor){
            inARow = inARow + 1;  
        }else{
            inARow = 0;
            break;
        }
          
        //after checking one cell in theBoard array in that direction move to the next cell
        cellRDUInArray = cellRDUInArray - 5;
    }
    if(inARow === 3){winAndReset();}
};

var rightDiagonalDownCheck = function () {
    //based on the current placed cell in the view check through theBoard array
    var cellRDDInArray = currentPlacedCell+6; 
    for(var i=0; i<3; i++){    
        if(theBoard[cellRDDInArray] === (cellRDDInArray+1)+currentPieceColor){
            inARow = inARow + 1;  
        }else{
            inARow = 0;
            break;
        }
          
        //after checking one cell in theBoard array in that direction move to the next cell
        cellRDDInArray = cellRDDInArray + 7;
    }
    if(inARow === 3){winAndReset();}  
};

var leftDiagonalUpCheck = function () {
    //based on the current placed cell in the view check through theBoard array
    var cellLDUInArray = currentPlacedCell-8; 
    for(var i=0; i<3; i++){    
        if(theBoard[cellLDUInArray] === (cellLDUInArray+1)+currentPieceColor){
            inARow = inARow + 1;  
        }else{
            inARow = 0;
            break;
        }
          
        //after checking one cell in theBoard array in that direction move to the next cell
        cellLDUInArray = cellLDUInArray - 7;
    }
    if(inARow === 3){winAndReset();}  
};

var leftDiagonalDownCheck = function () {
    //based on the current placed cell in the view check through theBoard array
    var cellLDDInArray = currentPlacedCell+4; 
    for(var i=0; i<3; i++){    
        if(theBoard[cellLDDInArray] === (cellLDDInArray+1)+currentPieceColor){
            inARow = inARow + 1;  
        }else{
            inARow = 0;
            break;
        }
          
        //after checking one cell in theBoard array in that direction move to the next cell
        cellLDDInArray = cellLDDInArray + 5;
    }
    if(inARow === 3){winAndReset();}
};


var winAndReset = function(){
    setTimeout(function() { 
        if (clickCountTotal%2 === 0) {
            alert("YELLOW WINS!!!\n\nPlayer 2 you owned this one!\n\nClick Ok to Reset the Game");
        }else{
            alert("RED WINS!!!\n\nPlayer 1 this one belongs to you!\n\nClick Ok to Reset the Game");
        } 
    }, 100);
    
    setTimeout(function(){
        window.location.reload(true);
    },2000);
};
/*********************************/