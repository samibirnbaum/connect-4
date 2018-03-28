// $(connectFourBoardInsert());

// function connectFourBoardInsert() {
//     $(".board").after(function(){
//         var boardHtml = "";
//         for(var i=1; i<=36; i++){
//             boardHtml = boardHtml + "<div class="+i+" style='grid-area: "+i+";'>"+i+"</div>";
//         }
//         return boardHtml;
//     });
// };

var redPiece = '<div class="red-piece"></div>';
var yellowPiece = '<div class="yellow-piece"></div>';

var playerOnesTurn = '<h2 class="text-muted">Player 1 <br> It is your turn</h2>';
var playerTwosTurn = '<h2 class="text-muted">Player 2 <br> It is your turn</h2>';

var clickCountTotal = 0;

$("button").click(function () {
    clickCountTotal = clickCountTotal + 1;
    changeTurnInfo();
});




var changeTurnInfo = function() {
    if (clickCountTotal%2 === 0) {
        $(".turn").append(playerOnesTurn + redPiece);
    }else{
        $(".turn").append(playerTwosTurn + yellowPiece);
    }
};