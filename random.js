function nextTurn(){
    //AI to make its turn
    let availible = [];
    for(let i = 0; i<3; i++){
        for(let j=0; j<3; j++){
            if(board[i][j]==''){
                availible.push({i,j});
            }
        }
    }

    let move = random(availible);
    board[move.i][move.j] = ai;
    currentPlayer = human;
}