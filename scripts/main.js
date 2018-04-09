
$("button").click(function (event) {
    clickTrack(event.target);    
    changeTurnInfo();
    placePiece(event.target);
    console.log(theBoard);
    winCheck();
    
});


/****GLOBAL VARIABLES****/

var clickCountTotal = 0;
var pieceColor = "red";
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
        pieceColor = "yellow";
    }else{
        $(".turn").empty().append(playerTwosTurn + yellowPiece);
        pieceColor = "red"
    }
};
/*********************************/










/****PLACING PIECES ON THE BOARD****/

var placePiece = function(eventTarget) {
    if($(eventTarget).data("button") === 1 && buttonOneClickCount === 1){
        insertPiece(31, pieceColor);
        updateTheBoard(31, pieceColor);
    }else if($(eventTarget).data("button") === 1 && buttonOneClickCount === 2){
        insertPiece(25, pieceColor);
        updateTheBoard(25, pieceColor);
    }else if($(eventTarget).data("button") === 1 && buttonOneClickCount === 3){
        insertPiece(19, pieceColor);
        updateTheBoard(19, pieceColor);
    }else if($(eventTarget).data("button") === 1 && buttonOneClickCount === 4){
        insertPiece(13, pieceColor);
        updateTheBoard(13, pieceColor);
    }else if($(eventTarget).data("button") === 1 && buttonOneClickCount === 5){
        insertPiece(7, pieceColor);
        updateTheBoard(7, pieceColor);
    }else if($(eventTarget).data("button") === 1 && buttonOneClickCount >= 6){
        insertPiece(1, pieceColor);
        updateTheBoard(1, pieceColor);
        $("[data-button=1]").prop("disabled","true");
    }

    if($(eventTarget).data("button") === 2 && buttonTwoClickCount === 1){
        insertPiece(32, pieceColor);
        updateTheBoard(32, pieceColor);
    }else if($(eventTarget).data("button") === 2 && buttonTwoClickCount === 2){
        insertPiece(26, pieceColor);
        updateTheBoard(26, pieceColor);
    }else if($(eventTarget).data("button") === 2 && buttonTwoClickCount === 3){
        insertPiece(20, pieceColor);
        updateTheBoard(20, pieceColor);
    }else if($(eventTarget).data("button") === 2 && buttonTwoClickCount === 4){
        insertPiece(14, pieceColor);
        updateTheBoard(14, pieceColor);
    }else if($(eventTarget).data("button") === 2 && buttonTwoClickCount === 5){
        insertPiece(8, pieceColor);
        updateTheBoard(8, pieceColor);
    }else if($(eventTarget).data("button") === 2 && buttonTwoClickCount >= 6){
        insertPiece(2, pieceColor);
        updateTheBoard(2, pieceColor);
        $("[data-button=2]").prop("disabled","true");
    }

    if($(eventTarget).data("button") === 3 && buttonThreeClickCount === 1){
        insertPiece(33, pieceColor);
        updateTheBoard(33, pieceColor);
    }else if($(eventTarget).data("button") === 3 && buttonThreeClickCount === 2){
        insertPiece(27, pieceColor);
        updateTheBoard(27, pieceColor);
    }else if($(eventTarget).data("button") === 3 && buttonThreeClickCount === 3){
        insertPiece(21, pieceColor);
        updateTheBoard(21, pieceColor);
    }else if($(eventTarget).data("button") === 3 && buttonThreeClickCount === 4){
        insertPiece(15, pieceColor);
        updateTheBoard(15, pieceColor);
    }else if($(eventTarget).data("button") === 3 && buttonThreeClickCount === 5){
        insertPiece(9, pieceColor);
        updateTheBoard(9, pieceColor);
    }else if($(eventTarget).data("button") === 3 && buttonThreeClickCount >= 6){
        insertPiece(3, pieceColor);
        updateTheBoard(3, pieceColor);
        $("[data-button=3]").prop("disabled","true");
    }

    if($(eventTarget).data("button") === 4 && buttonFourClickCount === 1){
        insertPiece(34, pieceColor);
        updateTheBoard(34, pieceColor);
    }else if($(eventTarget).data("button") === 4 && buttonFourClickCount === 2){
        insertPiece(28, pieceColor);
        updateTheBoard(28, pieceColor);
    }else if($(eventTarget).data("button") === 4 && buttonFourClickCount === 3){
        insertPiece(22, pieceColor);
        updateTheBoard(22, pieceColor);
    }else if($(eventTarget).data("button") === 4 && buttonFourClickCount === 4){
        insertPiece(16, pieceColor);
        updateTheBoard(16, pieceColor);
    }else if($(eventTarget).data("button") === 4 && buttonFourClickCount === 5){
        insertPiece(10, pieceColor);
        updateTheBoard(10, pieceColor);
    }else if($(eventTarget).data("button") === 4 && buttonFourClickCount >= 6){
        insertPiece(4, pieceColor);
        updateTheBoard(4, pieceColor);
        $("[data-button=4]").prop("disabled","true");
    }

    if($(eventTarget).data("button") === 5 && buttonFiveClickCount === 1){
        insertPiece(35, pieceColor);
        updateTheBoard(35, pieceColor);
    }else if($(eventTarget).data("button") === 5 && buttonFiveClickCount === 2){
        insertPiece(29, pieceColor);
        updateTheBoard(29, pieceColor);
    }else if($(eventTarget).data("button") === 5 && buttonFiveClickCount === 3){
        insertPiece(23, pieceColor);
        updateTheBoard(23, pieceColor);
    }else if($(eventTarget).data("button") === 5 && buttonFiveClickCount === 4){
        insertPiece(17, pieceColor);
        updateTheBoard(17, pieceColor);
    }else if($(eventTarget).data("button") === 5 && buttonFiveClickCount === 5){
        insertPiece(11, pieceColor);
        updateTheBoard(11, pieceColor);
    }else if($(eventTarget).data("button") === 5 && buttonFiveClickCount >= 6){
        insertPiece(5, pieceColor);
        updateTheBoard(5, pieceColor);
        $("[data-button=5]").prop("disabled","true");
    }

    if($(eventTarget).data("button") === 6 && buttonSixClickCount === 1){
        insertPiece(36, pieceColor);
        updateTheBoard(36, pieceColor);
    }else if($(eventTarget).data("button") === 6 && buttonSixClickCount === 2){
        insertPiece(30, pieceColor);
        updateTheBoard(30, pieceColor);
    }else if($(eventTarget).data("button") === 6 && buttonSixClickCount === 3){
        insertPiece(24, pieceColor);
        updateTheBoard(24, pieceColor);
    }else if($(eventTarget).data("button") === 6 && buttonSixClickCount === 4){
        insertPiece(18, pieceColor);
        updateTheBoard(18, pieceColor);
    }else if($(eventTarget).data("button") === 6 && buttonSixClickCount === 5){
        insertPiece(12, pieceColor);
        updateTheBoard(12, pieceColor);
    }else if($(eventTarget).data("button") === 6 && buttonSixClickCount >= 6){
        insertPiece(6, pieceColor);
        updateTheBoard(6, pieceColor);
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

var winCheck = function(){
    //use the array to check for a winner
    //when someone wins reset everything
};


/*********************************/