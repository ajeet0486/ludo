const diceButtonElement=document.querySelector('.roll');

export class UI{
    static listenDiceClick(callback){
        diceButtonElement.addEventListener('click',callback);
    }
    static listenResetClick(callback){
        document.querySelector('.reset').addEventListener('click',callback);
    }
    static listenPieceClick(callback){
        document.querySelector('.player-pieces').addEventListener('click',callback);
    }
    
    setPiecePosition(player,piece,newPosition){

    }
}