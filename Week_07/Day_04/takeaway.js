function gameOfStones(n) {
    return (n % 7 < 2) ? "false" : "true" ;
}

console.log(gameOfStones(80));

function canWin(n){
    if(n<2) return false;
    return (canWin(n-2)===0 || canWin(n-3)===0 || canWin(n-5)===0);
}

console.log(canWin(60));