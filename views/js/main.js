import Board from "./classes/Board.class.js";

const canvas =  document.querySelector("#canvx");
function reafreshBoard(board){
    board.cleanBoard();
    board.draw();
    window.requestAnimationFrame(()=>{
        reafreshBoard(board)
    });
}

document.addEventListener('DOMContentLoaded',(event)=>{

    const board = new Board(canvas);
    
    
    board.initTargetTab();
    window.requestAnimationFrame(()=>{
        reafreshBoard(board)
    })

    canvas.addEventListener('click',(event)=>{
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        board.onchangePos(x,y);
    })

})








