var turn = 0;
var isWin = false;
var board = new Array(3);
for (var i = 0; i < board.length; i++){
    board[i] = new Array(3);
}
initBoard();
printBoard();
function initBoard(){
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            board[i][j] = 0;
        }
    }
}
function printBoard(){
    document.getElementById('debug').innerHTML = "";
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            document.getElementById('debug').innerHTML += board[i][j];
        }
        document.getElementById('debug').innerHTML += "<br>"
    }
}